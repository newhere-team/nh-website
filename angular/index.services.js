import {NgoService} from './services/ngo.service';
import {OfferTranslationService} from './services/offerTranslation.service';
import {UserService} from './services/user.service';
import {RoleService} from './services/role.service';
import {LanguageService} from './services/language.service';
import {RecusionsHelperService} from './services/recusionsHelper.service';
import {CategoryService} from './services/category.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';
import {OfferService} from './services/offer.service';

angular.module('app.services')
	.service('NgoService', NgoService)
	.service('OfferTranslationService', OfferTranslationService)
	.service('UserService', UserService)
	.service('RoleService', RoleService)
	.service('LanguageService', LanguageService)
	.factory('RecusionsHelperService', RecusionsHelperService)
	.service('CategoryService', CategoryService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
	.service('OfferService', OfferService);
