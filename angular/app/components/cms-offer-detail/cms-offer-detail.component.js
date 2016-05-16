class CmsOfferDetailController {

    constructor(OfferDetailService, $filter, $state, DialogService) {
        'ngInject';
        this.OfferDetailService = OfferDetailService;

        var vm = this;
        this.filter = {};
        this.$filter = $filter;
        this.$state = $state;
        this.DialogService = DialogService;
        this.OfferDetailService.fetchAll().then(function (response) {
            vm.offerDetail = response;
        });

        this.OfferDetailService.one().then(function (response) {
            vm.offer = response;
        });

    }

}
export const CmsOfferDetailComponent = {
    templateUrl: './views/app/components/cms-offer-detail/cms-offer-detail.component.html',
    controller: CmsOfferDetailController,
    controllerAs: 'vm',
    bindings: {}
}

