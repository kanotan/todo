import crypto from 'crypto';
import base64url from 'base64url';

export const cognitoJwtGenerator = (username: String) => {
  const header = {
    'alg': 'HS256',
    'typ': 'JWT',
  };

  const payload = {
    'sub': '7d8ca528-4931-4254-9273-ea5ee853f271',
    'cognito:groups': [],
    'email_verified': true,
    'algorithm': 'HS256',
    'iss': 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_fake_idp',
    'phone_number_verified': true,
    'cognito:username': username,
    'cognito:roles': [],
    'aud': '2hifa096b3a24mvm3phskuaqi3',
    'event_id': '18f4067e-9985-4eae-9f33-f45f495470d0',
    'token_use': 'id',
    'phone_number': '+12062062016',
    'exp': 16073469193,
    'email': 'user@domain.com',
    'auth_time': 1586740073,
    'iat': 1586740073
  };

  const encodedHeaderPlusPayload = base64url(JSON.stringify(header)) + '.' + base64url(JSON.stringify(payload));

  const hmac = crypto.createHmac('sha256', 'secretKey');
  hmac.update(encodedHeaderPlusPayload);

  return encodedHeaderPlusPayload + '.' + hmac.digest('hex');
}