import {toCamelCase, toKebabCase, toSnakeCase} from "../stringUtils"

describe("String utils",()=>{
    test('should convert correctly', () => { 
        const camelCase= "myVariableName"
        const kebapCase="my-variable-name"
        const snakeCase= "my_variable_name"

        expect(toKebabCase(camelCase)).toBe(kebapCase)
        expect(toSnakeCase(camelCase)).toBe(snakeCase)

        expect(toKebabCase("XmlHttpRequest")).toBe("xml-http-request")
        expect(toSnakeCase("getUserById")).toBe("get_user_by_id")
     })
})