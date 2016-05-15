export class OfferService{
    constructor(API, $q, ToastService, $state, DialogService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.$q = $q;
        this.$state = $state;
        this.DialogService = DialogService;

    }

    fetchAll() {
        var vm = this;
        return this.$q(function(resolve) {
            vm.API.all('offers').getList().then(function (response) {
                resolve(response)
            }, function (error) {
                console.log(error);
                vm.ToastService.show("Fetching Offers failed");
            });
        });
    }

    cancel(cms) {
        if (cms) {
            this.DialogService.hide();
        } else {
            this.$state.go("app.landing");
        }
    }

    create(offer) {
        //this.API.all('offers').post(offer).then(()=>{
        //    this.$state.go(this.$state.current, {}, {reload: true});
        //    this.ToastService.show('Saved successfully');
        //    this.DialogService.hide();
        //});
    }

    toggleEnabled(offer) {
        this.API.one('offers', offer.id).customPUT({
            enabled: offer.enabled ? 1 : 0
        },'toggleEnabled').then(
            (success) => {
                this.ToastService.show('Offer updated.');
            },
            (error) => {
                console.log(error);
                this.ToastService.show('Offer update failed. Please try again');
                offer.enabled = !offer.enabled;
            }
        );
    }

    bulkRemove(list, success, error){
        var ids = [];
        angular.forEach(list, (item) => {
            ids.push(item.id);
        });
        this.API.several('offers', ids).remove().then((response) => {
            this.ToastService.show(response.data.deletedRows+' item(s) successfully deleted!');
            success(response.data.offers);
        });
    }
}

