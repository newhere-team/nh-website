import {RecusionsHelperService} from './services/recusionsHelper.service';
import {CategoryService} from './services/category.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.factory('RecusionsHelperService', RecusionsHelperService)
	.service('CategoryService', CategoryService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
