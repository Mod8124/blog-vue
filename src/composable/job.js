import {ref} from 'vue'

const get = ()=> {
    const error = ref(null);

    const jobs = ref([])

    const load = async () => {
        try {
            const data = await fetch('http://localhost:3000/jobs')
            if(!data.ok) {
                throw Error('no jobs available')
            }
            jobs.value = await data.json();
        }
        catch (err) {
            error.value = err.message
            alert(error.value)
        }
    }
    return {load, error, jobs}
}

export default get