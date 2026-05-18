import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        const body = event.body ? JSON.parse(event.body) : event;
        
        if (!body.report_date || !body.child_id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing required fields: report_date or child_id" }),
            };
        }

        const params = {
            TableName: "AceOMeterReports",
            Item: {
                // Keys
                report_date: body.report_date,
                child_id: body.child_id,
                
                // Raw Kid Metrics
                sleep_time: body.sleep_time || null,
                wake_time: body.wake_time || null,
                mood_wake: body.mood_wake || null,
                mood_school: body.mood_school || null,
                homework: body.homework || null,
                violence_incidents: body.violence_incidents ?? 0,
                swear_words: body.swear_words ?? 0,
                corner_state: body.corner_state || null,
                
                // Household Context Metrics
                who_is_up: body.who_is_up || null,
                parents_bed: body.parents_bed || null,
                kitchen_state: body.kitchen_state || null,
                living_room_state: body.living_room_state || null,
                bedtime_story: body.bedtime_story || "",
                general_notes: body.general_notes || "",
                
                created_at: new Date().toISOString()
            }
        };

        await docClient.send(new PutCommand(params));

        return {
            statusCode: 201,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: "Raw report data saved successfully!" }),
        };

    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error", error: error.message }),
        };
    }
};