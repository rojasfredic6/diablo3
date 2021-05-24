<template lang="pug">
    div
        base-loading(v-if="isLoading")
        template(v-if="profileData !== null")
            main-block(:profileData="profileData")
</template>

<script>
import { getApiAccount } from '@/api/search';
import setError from '@/mixins/setError';
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index';

export default {
    name: 'ProfileView',
    components:{
        BaseLoading,
        MainBlock
    },
    mixins: [
        setError
    ],
    data(){
        return {
            profileData: null,
            isLoading: false
        }
    },
    created(){
        this.isLoading = true;
        const { region, battleTag: account } = this.$route.params
        this.fetchData(region,account)
    },
    methods: {
        fetchData(region,account){
            getApiAccount({region, account})
                .then(({data}) => {
                    this.profileData = data
                })
                .catch(err => {
                    this.profileData = null;
                    const errObj = {
                        routeParams: this.$route.params,
                        message: err.message
                    }
                    if(err.response) {
                        errObj.data = err.response.data;
                        errObj.status = err.response.status;
                    }

                    this.setApiErr(errObj);

                    this.$router.push({ name: 'Error' })
                })
                .finally(() => {
                    this.isLoading = false
                })
        }
    }
}
</script>