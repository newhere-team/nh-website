class DashboardPageController
{
	constructor( $state, $scope, $rootScope, UserService )
	{
		'ngInject';

		//
		this.$state = $state;
		this.UserService = UserService;

		//
		this.tab = 0;

		let onUser = $rootScope.$on( "userChanged", ( event, item ) =>
		{
			this._checkUser();
		} );

		$scope.$on( '$destroy', () =>
		{
			onUser();
		} );

		this._checkUser();
	}

	_checkUser()
	{
		if( !this.UserService.isAdministrator() )
			this.tab = 1;

		if( this.$state.params.tab )
			this.tab = this.$state.params.tab;
	}

	//
	isElementVisible( name )
	{
		if( name === "provider" )
			return false; //this.UserService.isAdministrator();

		//
		return false;
	}
}

export const DashboardPageComponent = {
	template: require('./dashboard-page.component.html'),
	controller: DashboardPageController,
	controllerAs: 'vm',
	bindings: {}
};