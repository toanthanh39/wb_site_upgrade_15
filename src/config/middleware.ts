import { getSettingServer } from "@/services/api/setting/server";
import Helper from "@/utils/helper";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";



export const updateSession = async (request: NextRequest) => {

  const _header = await headers();
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const domain = _header.get("x-forwarded-host")!;
		const replaceDomainSetting = Helper.validateKey(domain);
		const key  =`${replaceDomainSetting}_config`;

    const dataSetting =  await getSettingServer<string>(key)
    response.headers.append("lang", dataSetting.value)

    return response;
  } catch (e) {
   
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};