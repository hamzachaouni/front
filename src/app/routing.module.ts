import { SupportComponent } from './component/support/support.component';
import { BeforeLoginService } from './services/before-login.service';
import { QrcodegeneratorComponent } from './component/qrcodegenerator/qrcodegenerator.component';
import { BlogComponent } from './component/blog/blog.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { FormPaypalComponent } from './typesqrcode/form-paypal/form-paypal.component';
import { FormWifiComponent } from './typesqrcode/form-wifi/form-wifi.component';
import { FormSimpleVcardComponent } from './typesqrcode/form-simple-vcard/form-simple-vcard.component';
import { FormCalendarComponent } from './typesqrcode/form-calendar/form-calendar.component';
import { FormEmailAdressComponent } from './typesqrcode/form-email-adress/form-email-adress.component';
import { FormPhoneNumberComponent } from './typesqrcode/form-phone-number/form-phone-number.component';
import { FormSmsComponent } from './typesqrcode/form-sms/form-sms.component';
import { FormCouponComponent } from './typesqrcode/form-coupon/form-coupon.component';
import { FormTwitterComponent } from './typesqrcode/form-twitter/form-twitter.component';
import { FormYoutubeComponent } from './typesqrcode/form-youtube/form-youtube.component';
import { FormLinkedInComponent } from './typesqrcode/form-linked-in/form-linked-in.component';
import { FormFacebookComponent } from './typesqrcode/form-facebook/form-facebook.component';
import { FormAudioComponent } from './typesqrcode/form-audio/form-audio.component';
import { FormAppStoreLinkComponent } from './typesqrcode/form-app-store-link/form-app-store-link.component';
import { FormImageComponent } from './typesqrcode/form-image/form-image.component';
import { FormpdfComponent } from './typesqrcode/formpdf/formpdf.component';
import { FormgooglemapsComponent } from './typesqrcode/formgooglemaps/formgooglemaps.component';
import { FormurlwebsiteComponent } from './typesqrcode/formurlwebsite/formurlwebsite.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FormSocialMediaLinkComponent } from './typesqrcode/form-social-media-link/form-social-media-link.component';
import { FormVcardProfileComponent } from './typesqrcode/form-vcard-profile/form-vcard-profile.component';
import { FormSimpleTextComponent } from './typesqrcode/form-simple-text/form-simple-text.component';
import { DowloadsComponent } from './component/dowloads/dowloads.component';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './component/password/response-reset/response-reset.component';
import { WhyqrcodesComponent } from './component/whyqrcodes/whyqrcodes.component';
import { TestComponent } from './component/test/test.component';
import { AdminHomeComponent } from './components/adminComponents/admin-home/admin-home.component';
import { SettingQrcodeComponent } from './components/adminComponents/setting-qrcode/setting-qrcode.component';
import { TajribaComponent } from './component/tajriba/tajriba.component';
import { ShowQrcodeComponent } from './components/visitorComponents/show-qrcode/show-qrcode.component';
import { CreateQrcodeComponent } from './components/visitorComponents/create-qrcode/create-qrcode.component';

const routes: Routes = [

    /* start routes admin */
    { path:"admin/home", component: AdminHomeComponent },
    { path:"admin/setting/qrcode", component: SettingQrcodeComponent },
    /* end routes admin */

    /* start routes user */
    /* end routes user */

    /* start routes visitor */
    { path:"show/qrcode", component: ShowQrcodeComponent },
    { path:"create/qrcode/:id", component: CreateQrcodeComponent },
    /* end routes visitor */

    { path:" ", component: HomeComponent },
    { path:"home", component: HomeComponent },
    { path:"qrcodegenerator", component:  QrcodegeneratorComponent},
    { path:"login", component: LoginComponent, canActivate: [BeforeLoginService] },
    { path:"register", component: RegisterComponent, canActivate: [BeforeLoginService] },
    { path:"qrcode/dowload", component: DowloadsComponent },
    { path:"blog", component: BlogComponent },
    { path:"hamza", component: DowloadsComponent, canActivate: [AuthGuardGuard] },
    { path:"request-password-reset", component: RequestResetComponent, canActivate: [BeforeLoginService] },
    { path:"response-password-reset", component: ResponseResetComponent, canActivate: [BeforeLoginService] },
    { path:"support", component: SupportComponent },
    { path:"why-qr-codes", component: WhyqrcodesComponent },

    { path:"test", component: TestComponent },


    { path:"create/url", component: FormurlwebsiteComponent },
    { path:"create/googlemaps", component: FormgooglemapsComponent },
    { path:"create/pdf", component: FormpdfComponent },
    { path:"create/image", component: FormImageComponent },
    { path:"create/smedia", component: FormSocialMediaLinkComponent },
    { path:"create/vcardprofile", component: FormVcardProfileComponent },
    { path:"create/appstore", component: FormAppStoreLinkComponent },
    { path:"create/audio", component: FormAudioComponent },
    { path:"create/facebook", component: FormFacebookComponent },
    { path:"create/linkedin", component: FormLinkedInComponent },
    { path:"create/youtube", component: FormYoutubeComponent },
    { path:"create/twitter", component: FormTwitterComponent },
    { path:"create/coupon", component: FormCouponComponent },
    { path:"create/sms", component: FormSmsComponent },
    { path:"create/phone", component: FormPhoneNumberComponent },
    { path:"create/email", component: FormEmailAdressComponent },
    { path:"create/calendar", component: FormCalendarComponent },
    { path:"create/svcard", component: FormSimpleVcardComponent },
    { path:"create/wifi", component: FormWifiComponent },
    { path:"create/text", component: FormSimpleTextComponent },
    { path:"create/paypal", component: FormPaypalComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuardGuard]
})

export class RoutingModule {}