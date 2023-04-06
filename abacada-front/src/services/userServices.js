import api from "../util/api";

export default new class userServices {
    async getTeachers(instituicao) {
        return new Promise((resolve, reject) => {
            api.get("/professor?instituicao="+instituicao)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });      
    }

    getStudents(professor) {
        return new Promise((resolve, reject) => {
            api.get("/aluno?registroProfessor="+professor)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }
};