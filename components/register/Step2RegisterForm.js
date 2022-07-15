import useTranslation from "next-translate/useTranslation";

import { Controller, useForm } from "react-hook-form";

import { Button } from "../../components/common/Button";
import { InputText } from "../../components/common/InputText";

import style from 'pages/register/register.module.scss';

function Step2RegisterForm({ formInputData, setFormInputData, handleSubmitFormInputData }) {
    const { t } = useTranslation('register');
    const { handleSubmit, control, setError, formState: { errors } } = useForm();

    function handleSubmitRegister(model) {
        setFormInputData({
            ...formInputData,
            ...model
        });

        handleSubmitFormInputData();
    }

    return (
        <main className={style.content}>
            <form onSubmit={handleSubmit(handleSubmitRegister)} className={style.form}>
                <Controller 
                    control={control}
                    name='pseudonym'
                    render={ ({ field: { onChange } }) => (
                        <InputText 
                            onChange={onChange}
                            label={t('step2.usernamePlaceholder')}
                            variant="minimalist"
                            type="text"
                            name="pseudonym"
                            id="pseudonym"
                            required
                        />
                    )}
                    rules={{
                        required: t('inputRequired') 
                    }}
                />
                
                {/* <InputText 
                    label={t('step2.usernamePlaceholder')}
                    variant="minimalist"
                    type="text"
                    name="pseudonym"
                    id="pseudonym"
                    required
                /> */}
                
                <Controller 
                    control={control}
                    name='password'
                    render={ ({ field: { onChange } }) => (
                        <InputText 
                            onChange={onChange}
                            label={t('step2.passwordPlaceholder')}
                            variant="minimalist"
                            type="password"
                            name="password"
                            id="password"
                            required
                        />
                    )}
                    rules={{
                        required: t('inputRequired') 
                    }}
                />

                {/* <InputText 
                    label={t('step2.passwordPlaceholder')}
                    variant="minimalist"
                    type="password"
                    name="password"
                    id="password"
                    required
                /> */}

                <Controller 
                    control={control}
                    name='confirmPassword'
                    render={ ({ field: { onChange } }) => (
                        <InputText 
                            onChange={onChange}
                            label={t('step2.confirmPasswordPlaceholder')}
                            variant="minimalist"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                        />
                    )}
                    rules={{
                        required: t('inputRequired') 
                    }}
                />

                {/* <InputText 
                    label={t('step2.confirmPasswordPlaceholder')}
                    variant="minimalist"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                /> */}

                <Button 
                    type="submit" 
                    text={t('step2.registerButtonText')}
                    className={style.form__button}
                />
            </form>
        </main>
    );
}

export default Step2RegisterForm;