declare module 'google-auth-library' {
    import { AuthClient, GenerateAuthUrlOpts, OAuth2Client } from 'google-auth-library/build/src/auth/oauth2client';
    import { Credentials } from 'google-auth-library/build/src/auth/credentials';
  
    export = GoogleAuth;
    class GoogleAuth {
      constructor();
      fromJSON(json: any): OAuth2Client;
    }
  
    export interface GetEventsOptions {
      // Add options for listing events here, if applicable.
      calendarId: string;
      timeMin: string;
      timeMax: string;
    }
  
    // Export types, classes, and interfaces used in your code.
    export {
      AuthClient,
      GenerateAuthUrlOpts,
      OAuth2Client,
      Credentials,
    };
  }
    