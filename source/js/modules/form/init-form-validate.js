/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';
import FormsValidate from './form-validate';

const url_api = 'https://api.grows.global/v1/waitlist/queue';
const formWrappers = document.querySelectorAll('[data-validate]');

const resetForm = (form) => {
  setTimeout(() => {
    window.clearForm(form);
  }, 1000);
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get('user-email')

  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  grecaptcha.ready(function () {
    grecaptcha.execute('6LejziUfAAAAAOOWHWOjDIJT52k3eFmDD1Gnzv4y', {action: 'submit'}).then(function (token) {
      // eslint-disable-next-line no-console

      let invitationCode = null;

      if (window.location.pathname.startsWith('/i')) {
        invitationCode = window.location.pathname.split('/').pop();
      }

      const values = {
        email,
        source         : "grows-global-landing",
        invitation_code: invitationCode ?? null,
        recaptcha_token: token
      }

      async function postData(url, data) {
        let response = await fetch(url, {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body   : JSON.stringify(data)
        });

        return response.json();
      }

      postData(url_api, values).then((res) => {
        if (res.success) {
          window.onOpenModalSuccess(res.data.invitation_link);
        } else {
          console.error(res.error.ui_description, res.error.errors);
        }
      }).catch((error) => {
        throw new Error(error)
      })
      // window.onOpenModalSuccess('grows.ai/i/fsdp50');
    });
  });


  resetForm(e.target);
};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();
};

const customExampleValidationSuccessCallback = (e) => {
  e.preventDefault();
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  resetForm(e.target);
  // eslint-disable-next-line no-console
  // console.log('Ваша форма успешна отправлена');
};

const customExampleValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  // console.error('Отправка формы невозможна, заполните все обязательные поля');
};

const callbacks = {
  base         : {
    // Колбек при успешной валидации формы при попытке её отправки
    validationSuccessCallback: baseValidationSuccessCallback,
    // Колбек при не успешной валидации формы при попытке её отправки, не связан с запросами на сервер
    validationErrorCallback: baseValidationErrorCallback,
  },
  customExample: {
    validationSuccessCallback: customExampleValidationSuccessCallback,
    validationErrorCallback  : customExampleValidationErrorCallback,
  },
};

const setCustomPhoneInputsEvent = () => {
  if (document.querySelectorAll('[data-validate-type="phone"] input').length) {
    document.querySelector('html').addEventListener('input', ({target}) => {
      if (target.closest('[data-validate-type="phone"]')) {
        target.closest('[data-validate-type="phone"]').querySelector('input').dispatchEvent(new Event('input'));
      }
    });
  }
};

const initFormValidate = () => {
  if (formWrappers.length) {
    setCustomPhoneInputsEvent();
    formWrappers.forEach((wrapper) => {
      let callback = wrapper.dataset.callback;

      if (!callback) {
        callback = 'base';
      }

      const formValidate = new FormsValidate(wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

export {initFormValidate};
