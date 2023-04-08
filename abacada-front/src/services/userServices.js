import api from "../util/api";

export default new class userServices {
    getTeachers(instituicao) {
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

    addTeacher(registro, nome, instituicao) {
        return new Promise((resolve, reject) => {
            api.post("/professor",{
                "registro": registro,
                "nome": nome,
                "instituicao": {
                    "instituicao": instituicao.instituicao,
                    "usuario": {
                        "email": instituicao.usuario.email,
                        "senha": instituicao.usuario.senha
                    }
                }
            })
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }
};