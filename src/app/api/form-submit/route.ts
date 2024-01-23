import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const POST = async (request: NextRequest) => {
    const body = await request.json()
    const postData = {
        properties: {
          email: body.email,
          firstname: body.firstName,
          lastname: body.lastName,
          phone: body.number
        },
      };
    const apiKey = 'pat-na1-e36f4c28-95d6-4049-bd86-e974f2265890';
    const hubspotApiEndpoint = 'https://api.hubapi.com/crm/v3/objects/contacts';
    await axios.post(hubspotApiEndpoint, postData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          
        },
      });
      return NextResponse.json({ message: "Successfull" });

}