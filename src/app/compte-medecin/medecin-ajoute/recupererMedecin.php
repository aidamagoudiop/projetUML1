
<?php
header("content-Type: application/json");
require_once 'config/database.php';

$reponse = array();

$query = $con->prepare("SELECT * FROM Medecin");

    if($query->execute()){
        $medecin = array();
        $resultat = $query->get_result();

        while($elmt = $resultat->fetch_array(MYSQLI_ASSOC)){
            $medecin[] = $elmt;
        }

        $reponse['error'] = false;
        $reponse['films'] = $medecin;
        $reponse['message'] = "la commande a ete executee avec succes ...";
        $query -> close();
        
    }else{

        $reponse['error']= true;
        $reponse['message']="impossible d'executer la requete";
    }
    
    // echo json_encode($reponse);
    print_r($reponse);
?>