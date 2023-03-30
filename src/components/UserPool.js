import { CognitoUserPool } from "amazon-cognito-identity-js";

const Pool = {
    UserPoolId: "us-west-2_OIS4ozBgX",
    ClientId: "62791dve4e2kcch6u28b5qv3ed",
};

export default new CognitoUserPool(Pool);