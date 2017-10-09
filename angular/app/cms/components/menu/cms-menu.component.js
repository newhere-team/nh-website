class CmsMenuController
{
	constructor( $window )
	{
		'ngInject';
		this.$window = $window;
		//
		this.items = [
			{
				sref: 'cms.dashboard',
				icon: 'dashboard',
				title: 'Dashboard',
				roles: ['admin', 'superadmin', 'organisation-admin', 'organisation-user', 'moderator']
			},
			{
				sref: 'cms.offers',
				icon: 'local_offer',
				title: 'Offers',
				roles: ['admin', 'superadmin', 'organisation-admin', 'organisation-user']
			},
			{
				sref: 'cms.providers',
				icon: 'business',
				title: 'Providers',
				roles: ['admin', 'superadmin', 'organisation-admin', 'organisation-user']
			},
			{
				sref: 'cms.translations',
				icon: 'translate',
				title: 'Translations',
				roles: ['admin', 'superadmin', 'moderator']
			},
			{
				sref: 'cms.categories',
				icon: 'list',
				title: 'Categories',
				roles: ['admin', 'superadmin']
			},
			{
				sref: 'cms.filters',
				icon: 'filter_list',
				title: 'Filters',
				roles: ['admin', 'superadmin']
			},
			{
				sref: 'cms.languages',
				icon: 'font_download',
				title: 'Languages',
				roles: ['admin', 'superadmin']
			},
			{
				sref: 'cms.users',
				icon: 'group',
				title: 'Users',
				roles: ['superadmin']
			}
		];
	}

	$onInit()
	{
		this.roles = angular.fromJson( this.$window.localStorage.roles );
	}

	allowed( item )
	{
		let allowed = false;

		//
		angular.forEach( item.roles, ( role ) =>
		{
			angular.forEach( this.roles, ( userRole ) =>
			{
				if( role === userRole )
				{
					allowed = true;
				}
			} );
		} );

		return allowed;
	}
}

export const CmsMenuComponent = {
	template: require( './cms-menu.component.html' ),
	controller: CmsMenuController,
	controllerAs: 'vm',
	bindings: {}
};