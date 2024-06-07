import "../../main-container.scss";
import "./style.scss";
import React, { useState } from "react";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { sendEmail } from "./service/endpoint";
import { EmailDataType } from "./service/type";

import MainImage from "./images/image.png";
import User from "./icons/user.svg";
import Email from "./icons/email.svg";
import Phone from "./icons/phone.svg";
import Pencil from "./icons/pencil.svg";

const ContactUsSection = () => {
    const { isTablet, isMobile } = useResponsive();

   /* const [emailData, setEmailData] = useState<EmailDataType>({
        name: "",
        email:"",
        phone:"",
        message: ""
    });

    const sendFeedback = () => {
        sendEmail({
            name: emailData.name,
            email: emailData.email,
            phone: emailData.phone,
            message: emailData.message
        }).finally(() => {
            setEmailData({
                name: "",
                email:"",
                phone:"",
                message: ""
            })
            console.log("Sended")
        }).catch((e) => console.log(e))
    };

    const handleChangeEmailData = (e: HTMLInputElement | HTMLTextAreaElement | any) => {
		setEmailData({
			...emailData,
			[e.target.name]: e.target.value
		});
        console.log(emailData);
	};*/

    const [formName, setFormName] = useState<string>("");
    const [formEmail, setFormEmail] = useState<string>("");
    const [formPhone, setFormPhone] = useState<string>("");
    const [formMessage, setFormMessage] = useState<string>("");

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormName(e.target.value);
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormEmail(e.target.value);
    };

    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormPhone(e.target.value);
    };

    const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormMessage(e.target.value);
    };

    const sendFeedback = () => {
        sendEmail({
            name: formName,
            email: formEmail,
            phone: formPhone,
            message: formMessage
        }).finally(() => {
            setFormName("")
            setFormEmail("")
            setFormPhone("")
            setFormMessage("")
            console.log("Sended")
        }).catch((e) => console.log(e))
    };

    return (
        <div className="template-container">
            <div className="main-container">
                {isTablet || isMobile ? null : (
                    <div className="left-column">
                        <img className="contact-us-image" src={MainImage} alt="Main_image" />
                    </div>
                )}
                <div className="right-column">
                    <div className="form-container">
                        <div className="form-header">
                            <div>Contact us</div>
                        </div>
                        <div className="form-underheader">
                            <div>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
                        </div>
                        <div className="field-container">
                            <div className="icon"><img src={User} alt="Name" /></div>
                            <input 
                                className="input-name" 
                                placeholder="Name"
                                value={formName}
                                onChange={handleChangeName}
                            />
                        </div>
                        <div className="field-container">
                            <div className="icon"><img src={Email} alt="Email" /></div>
                            <input 
                                className="input-email" 
                                placeholder="Email address"
                                value={formEmail}
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <div className="field-container">
                            <div className="icon"><img src={Phone} alt="Phone" /></div>
                            <input 
                                className="input-phone" 
                                placeholder="Phone"
                                value={formPhone}
                                onChange={handleChangePhone}
                            />
                        </div>
                        <div className="message-field-container">
                            <div className="area-icon"><img src={Pencil} alt="Message" /></div>
                            <textarea 
                                className="input-message" 
                                placeholder="How can we help you"
                                value={formMessage}
                                onChange={handleChangeMessage}
                            />
                        </div>
                        <div className="send-button">
                            <button className="button" onClick={sendFeedback}>Send now</button>
                            <div className="afterbutton-text">Amet minim mollit non deserunt ullamco est sit aliqua.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactUsSection;