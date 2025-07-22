import { ThemedText } from "@/components/ThemedText";

type AllowedResources = "Wood" | "Sheep" | "Clay" | "Wheat" | "Stone";
interface InputInitialResourceCountProps{
    resourceName: AllowedResources;
}
export function InputInitialResourceCount({ resourceName }: InputInitialResourceCountProps) {
    return (
        <ThemedText>{resourceName}: </ThemedText>
    );
}
