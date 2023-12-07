// Within the init.js file, use async / await to load the JSON data and return it back into the buildGrid() function.


async function getEmployeeJSON() {
    try {
        const res = await fetch('./data/employees.json')
        const employees = await res.json()
        console.log('emply', employees)
        return employees
    } catch (e) {
        console.log('catch error', e)
    }
}

export { getEmployeeJSON }
