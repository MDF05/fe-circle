import { Link, Text } from "@chakra-ui/react"
import { Link as LinkRouter } from "react-router-dom"
import NavigationFormProps from "../types/NavigationFormProps"


export default function NavigationForm({ path, text }: NavigationFormProps) {
    return <Text>{text} <Link as={LinkRouter} to={"/" + path} color="brand.color" > {path}</Link ></Text>
}
