
export type RoboFlowResponse = {
    predictions: Prediction[]
}

type Prediction = {
    class: "osteophenia" | "osteoporosis" | "Normal" | "",
    class_id: number,
    confidence: number
}