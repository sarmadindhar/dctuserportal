import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {store} from '../store/index';


// Translation resources
const resources = {
  en: {
    translation: {
      locale:{
        'en':"English",
        'ar':"العربية",
      },
      verifyOtp:{
        otp:"OTP",
        verification:"Verification",
        label:"Enter the code sent to",
        not_received:"Didn't receive the code",
        click_to_resend:"Click to resend",
        action_btn:"Verify"
      },
      common:{
        login:"Login",
        signup:"Signup",
        register:"Register",
        phone:"Phone",
        email:"Email",
        address:"Address",
        apply_now:"Apply Now",
        send:"Send",
        download:"Download",
        view_details:" View Details",
        fee:"Fee",
        required_documents:"Required Documents"
      },
      header:{
        type:"Type",
        faq:"FAQ",
        guidelines:"Guidelines",
        contact:"Contact",
      },
      home:{
        special_license_mandate:"Special License <span\n" +
          "          class=\"text-[#F77860]\">Mandate</span>",
        license_types:"License <span\n" +
          "          class=\"text-[#F77860]\">Types</span>"
      },
      contactForm:{
        heading:"Get In <span\n" +
          "          class=\"text-[#F77860]\">Touch</span>",
        message:"Do you have any queries ? feel free to reach us!",
      },

      faq:{
        heading:"FA<span\n" +
          "          class=\"text-[#F77860]\">Qs</span>",
      },

      guideline:{
        heading:"Guideline <span\n" +
          "          class=\"text-[#F77860]\">Documents</span>",
        circulars:"Circulars",
        regulations:"Regulations",
        guidelines:"Guidelines"
      },

      login:{
        heading:"Welcome  <span\n" +
          "          class=\"text-[#F77860]\">Back</span>",
        message:"Today is a new day. It's your day. You shape it.\n" +
          "Sign in to start managing your licenses.",
      },
      register:{
        heading:"Welcome  <span\n" +
          "          class=\"text-[#F77860]\">Back</span>",
        message:"Today is a new day. It's your day. You shape it.\n" +
          "Register in to start managing your licenses.",
      },



      forms:{
        common:{
          name:"Name",
          email:"Email",
          password:"Password",
          phone_number:"Phone Number",
          description:"Description",
        }
      },


      fields:{
        specialLicenseNo: "Special License Number",
        alcoholLicenseNumber: "Alcohol License Number",
        tradeLicenseNo: "Trade License Number",
        tradeName: "Trade Name",
        ownerName: "Owner Name",
        map: "Map",
        eventType: "Event Type",
        eventTitle: "Event Title",
        eventDate: "Event Date",
        eventTiming: "Event Timing",
        expectedNoOfAttendees: "Expected Number Of Attendees",
        alcoholPurchaseValue: "Alcohol Purchase Value",
        address: "Address",
        email: "Email",
        region: "Region",
        licenseType: "License Type",
        gmName: "General Manager Name",
        gmEmail: "General Manager Email",
        gmNumber: "General Manager Phone No",
        specialLicenseNoOfImportExport: "Special License No Of Import Export",
        category: "Category",
        type: "Type",
        tourismRestaurantTradeName: "Tourism Restaurant Trade Name",
        tourismRestaurantTradeNo: "Tourism Restaurant Trade No",
        wareHouseLocation: "Warehouse location",
        issueDate: "Issue Date",
        expiryDate: "Expiry Date",
        startDateOfPromotion: "Start Date Of Promotion",
        endDateOfPromotion: "End Date Of Promotion",
        surveyQ1:"When is the latest time alcohol is served in the restaurant?",
        surveyQ2:"Will your restaurant serve light liquor or all spirits?",
        surveyQ3:"Will there be any Activities such as DJ, Band , or any kind of performance held at the premises?",
        surveyQ4:"Is it a fine dining restaurant with table & seats only or it includes bar seating area or Dance Floor",
        yes:"Yes",
        no:"No",
        light:"Light",
        allSpirits:"All Spirits",
        retailShop:"Retail Shop",
        applicantOfficeNo:"Applicant Office No",
        applicantMobileNo:"Applicant Mobile No",
        applicantName:"Applicant Name",

      },

    }
  },


  ar: {
    translation: {
      locale:{
        'en':"English",
        'ar':"العربية",
      },

      header:{
        type:"نوع",
        faq:"التعليمات",
        guidelines:"القواعد الارشادية",
        contact:"اتصال",
      },
      home:{
        special_license_mandate:"ولاية الترخيص" +
          " <span\n" +
          "          class=\"text-[#F77860]\">الخاصة</span>",
        license_types:"" +
          "أنواع " +
          " <span\n" +
          "          class=\"text-[#F77860]\">التراخيص</span>"
      },
      contactForm:{
        heading:"ابقى على" +
          " <span\n" +
          "          class=\"text-[#F77860]\">تواصل</span>",
        message:"هل لديك أي استفسارات؟ لا تتردد في الوصول إلينا!",
      },

      faq:{
        heading:"الأسئلة " +
          " <span\n" +
          "          class=\"text-[#F77860]\">الشائعة</span>",
      },

      guideline:{
        heading:"وثائق المبادئ " +
          " <span\n" +
          "          class=\"text-[#F77860]\">التوجيهية</span>",
        circulars:"التعاميم",
        regulations:"أنظمة",
        guidelines:"القواعد الارشادية"
      },


      login:{
        heading:"" +
          "مرحبًا " +
          "  <span\n" +
          "          class=\"text-[#F77860]\">بعودتك</span>",
        message:"اليوم يوم جديد. إنه يومك. أنت تشكلها. قم بتسجيل الدخول لبدء إدارة التراخيص الخاصة بك.",
      },

      register:{
        heading:"" +
          "مرحبًا " +
          "  <span\n" +
          "          class=\"text-[#F77860]\">بعودتك</span>",
        message:"اليوم يوم جديد. إنه يومك. أنت تشكلها. قم بالتسجيل لبدء إدارة التراخيص الخاصة بك.",
      },

      common:{
        "login": "تسجيل الدخول",
        "signup": "التسجيل",
        "register": "تسجيل",
        "phone": "هاتف",
        "email": "البريد الإلكتروني",
        "address": "العنوان",
        "apply_now": "قدم الآن",
        "send": "إرسال",
        "download":"تحميل",
        view_details:" عرض التفاصيل",
        fee:"مصاريف",
        required_documents:"المستندات المطلوبة"
      }
    }
  }
};


const state = store.getState();
const currentLanguage = state.app.locale;
console.log(currentLanguage);
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: currentLanguage, // Default language
    keySeparator: '.', // We do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;