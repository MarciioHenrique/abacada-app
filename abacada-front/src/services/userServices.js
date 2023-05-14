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

    getTeacher(registro) {
        return new Promise((resolve, reject) => {
            api.get("/professor/"+registro)
                .then(res => resolve(res?.data))
                .then(error => reject(error?.response?.data?.message));
        });
    }

    addTeacher(nome, email, instituicao) {
        return new Promise((resolve, reject) => {
            api.post("/professor",{
                "nome": nome,
                "email": email,
                "instituicao": {
                    "id": instituicao.id,
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

    addStudent(nome, heroi, nivel, professor) {
        return new Promise((resolve, reject) => {
            api.post("/aluno",{
                "nome": nome,
                "heroi": heroi,
                "nivel": nivel,
                "professor": {
                    "registro": professor.registro,
                    "nome": professor.nome,
                    "email": professor.email,
                    "instituicao": {
                        "instituicao": professor.instituicao.instituicao,
                        "usuario": {
                            "email": professor.instituicao.usuario.email,
                            "senha": professor.instituicao.usuario.senha
                        }
                    }
                }
            })
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    deleteTeacher(professor) {
        return new Promise((resolve, reject) => {
            api.delete("/professor?registro="+professor)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    deleteStudent(aluno) {
        return new Promise((resolve, reject) => {
            api.delete("/aluno?registro="+aluno)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    getJogos() {
        return new Promise((resolve, reject) => {
            api.get("/jogo")
                .then(res => resolve(res?.data))
                .then(error => reject(error?.response?.data?.message));   
        });
    }

    getHistorico() {
        return new Promise((resolve, reject) => {
            api.get("/historico")
                .then(res => resolve(res?.data))
                .then(error => reject(error?.response?.data?.message));   
        });
    }
};