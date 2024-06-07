import { EmailDataType } from "./type";

export const sendEmail = async (data: EmailDataType) => {
    await fetch("https://kaleab2jq3.execute-api.us-east-2.amazonaws.com/default/send-email", 
        {
		    method: "POST",
			body: JSON.stringify(data)
		})
        .catch((e) => {
            throw e;
        })
			
}