"use server"

import {auth , clerkClient} from "@clerk/nextjs/server"
import { ConvexHttpClient } from "convex/browser"
import { Id } from "../../../../convex/_generated/dataModel"
import { api } from "../../../../convex/_generated/api"

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function getDocuments(ids: Id<"documents">[]){
    return await convex.query(api.documents.getByIds , {ids})
}

export async function getUsers() {
    const { sessionClaims } = await auth()
    const clerk = await clerkClient()

    const response = await clerk.users.getUserList({
        organizationId: [sessionClaims?.org_id as string],
    })

    // const name =user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous";

    // const nameToNumber = name.split("").reduce((acc,char) => acc + char.charCodeAt(0), 0);
    // const hue = Math.abs(nameToNumber) % 360;
    // const color = `hsl(${hue},80%, 60%)`

    const users = response.data.map((user) => ({
        id : user.id,
        name : user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous" ,
        avatar : user.imageUrl,
        color : ""
    })) 

    return users
}