const liveHost = "https://us-central1-mealstogo-f96cc.cloudfunctions.net";
const localHost = " http://localhost:5001/mealstogo-f96cc/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
