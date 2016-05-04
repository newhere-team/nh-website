class CmsCategoryFormController{
    constructor( $stateParams, CategoryService, ToastService){
        'ngInject';

        this.ToastService = ToastService;
        this.CategoryService = CategoryService;
        this.categories = CategoryService.categories;
        this.category = {
          title:'',
          description:''
        };

        if($stateParams.id != 'new'){
          this.CategoryService.one($stateParams.id);
          this.category = this.CategoryService.category;
        }
    }

    save() {
      this.CategoryService.save(this.category);
    }
}

export const CmsCategoryFormComponent = {
    templateUrl: './views/app/components/cms-category-form/cms-category-form.component.html',
    controller: CmsCategoryFormController,
    controllerAs: 'vm',
    bindings: {}
}
