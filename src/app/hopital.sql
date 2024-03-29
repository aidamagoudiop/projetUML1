    FOREIGN KEY (id_patient) REFERENCES Patients(id_patient)DROP DATABASE IF EXISTS application;

CREATE DATABASE application;

USE application;

CREATE TABLE Administrateur(
            id_assistant INT PRIMARY KEY AUTO_INCREMENT,
            nom VARCHAR(20),
            prenom VARCHAR(20),
            passwd VARCHAR(20),
            email VARCHAR(20)
);

CREATE TABLE Assistant(
            id_assistant INT PRIMARY KEY AUTO_INCREMENT,
            nom VARCHAR(20),
            prenom VARCHAR(20),
            numero_telephone VARCHAR(9),
            mdp VARCHAR(10)         

);

CREATE TABLE Medecin(
            id_medecin INT PRIMARY KEY AUTO_INCREMENT,
            nom VARCHAR(20),
            prenom VARCHAR(20),
            numero_telephone VARCHAR(9),
            mdp VARCHAR(10)         
);

CREATE TABLE Hopital(
            id_hopital INT PRIMARY KEY AUTO_INCREMENT,
            nom VARCHAR(20),
            lieu VARCHAR(20),
            logo smallint
);


CREATE TABLE Rendez_vous(
            id_rv INT PRIMARY KEY AUTO_INCREMENT,
            date_rv DATE,
            id_patient INT,
            id_medecin INT,
            FOREIGN KEY (id_patient) REFERENCES Patients(id_patient),
            FOREIGN KEY (id_medecin) REFERENCES Medecin(id_medecin)
  
);

CREATE TABLE Dossier(
            id_dossier INT PRIMARY KEY AUTO_INCREMENT,
            id_patient INT,
            id_medecin INT,
            id_antecedant INT,
            id_signes_cliniques INT,
            id_signes_paracliniques INT,
            id_traitement INT,
            id_suivi INT,
            FOREIGN KEY (id_patient) REFERENCES Patients(id_patient),
            FOREIGN KEY (id_medecin) REFERENCES Medecin(id_medecin),
            FOREIGN KEY (id_antecedant) REFERENCES Antecedents(id_antecedant),
            FOREIGN KEY (id_signes_cliniques) REFERENCES SignesCliniques(id_signes_cliniques),
            FOREIGN KEY (id_signes_paracliniques) REFERENCES SignesParacliniques(id_signes_paracliniques),
            FOREIGN KEY (id_traitement) REFERENCES Traitement(id_traitement),
            FOREIGN KEY (id_suivi) REFERENCES Suivi(id_suivi)

);


-- Table Patients
CREATE TABLE Patients (
    id_patient INT PRIMARY KEY,
    initiales VARCHAR(5),
    statut_matrimonial VARCHAR(20),
    age INT,
    adresse VARCHAR(100),
    telephone VARCHAR(15),
    profession VARCHAR(50),
    niveau_socioeconomique VARCHAR(20)
);

-- Table Antécédents
CREATE TABLE Antecedents (
    id_antecedant INT PRIMARY KEY,
    id_patient INT,
    antecedents_medicaux VARCHAR(255),
    antecedents_gyneco_obstetricaux VARCHAR(255),
    hospitalisations_anterieures VARCHAR(255),
    FOREIGN KEY (id_patient) REFERENCES Patients(id_patient)
);

-- Table SignesCliniques
CREATE TABLE SignesCliniques (
    id_signes_cliniques INT PRIMARY KEY,
    id_patient INT,
    dyspnee VARCHAR(3),
    palpitations VARCHAR(3),
    oedeme VARCHAR(3),
    toux VARCHAR(3),
    souffle_cardiaque VARCHAR(3),
    tachypnee VARCHAR(3),
    autres_signes_cliniques VARCHAR(255),
    FOREIGN KEY (id_patient) REFERENCES Patients(id_patient)
);

-- Table SignesParacliniques
CREATE TABLE SignesParacliniques (
    id_signes_paracliniques INT PRIMARY KEY,
    id_patient INT,
    biochimie VARCHAR(255),
    imagerie VARCHAR(255),
    ECG VARCHAR(255),
    echo_cardiographie VARCHAR(255),
    tele_monitoring VARCHAR(3),
    FOREIGN KEY (id_patient) REFERENCES Patients(id_patient)
);

-- Table Traitement
CREATE TABLE Traitement (
    id_traitement INT PRIMARY KEY,
    id_patient INT,
    medicaments VARCHAR(255),
    procedures_chirurgicales VARCHAR(255),
    autres_interventions VARCHAR(255),
    FOREIGN KEY (id_patient) REFERENCES Patients(id_patient)
);


-- Table Suivi
CREATE TABLE Suivi (
    id_suivi INT PRIMARY KEY,
    id_patient INT,
    id_evolution_bebe INT,
    classe_NYHA VARCHAR(50),
    evolution_apres_sortie VARCHAR(50),
    details_deces VARCHAR(255),
    rehospitalisations_pendant_suivi VARCHAR(255),
    FOREIGN KEY (id_patient) REFERENCES Patients(id_patient),
    FOREIGN KEY (id_evolution_bebe) REFERENCES Patients(id_evolution_bebe)
);

-- Table EvolutionBebe
CREATE TABLE EvolutionBebe (
    id_evolution_bebe INT PRIMARY KEY,
    id_patient INT,
    resultats_neonatals VARCHAR(255),
    parametres_neonatals VARCHAR(255),
    parametres_nourrisson VARCHAR(255),
    FOREIGN KEY (id_patient) REFERENCES Patients(id_patient)
);
