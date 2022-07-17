<?php 
/**
 * Cors 
 */
if($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Authorization, user-token, Accept, content-type');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Content-Type: application/json; charset=UTF-8");
    header('Access-Control-Max-Age: 1728000');
    header("Content-Length: 0");
    header("Content-Type: text/plain");
    exit(0);
}

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, user-token, Accept");


    // Conexão com o banco de dados
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "sinadb";
    $conn = null;

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        /* echo "Connected successfully"; */
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    $dados = file_get_contents('php://input');
    $dados = json_decode($dados, true);


    $action = $dados['action'] ?? null;
    $name = $dados['name'] ?? null;
    $duration = $dados['duration'] ?? null;
    $date = $dados['date'] ?? null;
    $altName = $dados['altName'] ?? null;

if($action && $name && $duration && $date && $altName) {

    // CRUD --> Create, Read, Update, Delete
    if($action === "create") {
        if(create($conn, $name, $duration, $date, $altName)) {
            echo json_encode(["success" => true, "message" => "Anime uploaded with sucess!"]);
        }
    }

} else {
    echo json_encode(["success" => false, "message" => "Ops! something went wrong."]);
}

function create($conn, $name, $duration, $date, $altName) {
    try {
        $stmt = $conn->prepare("INSERT INTO animes (name, duration, date, altName) VALUES (:name, :duration, :date, :altName)");
        $stmt->bindValue(':name', $name);
        $stmt->bindValue(':duration', $duration);
        $stmt->bindValue(':date', $date);
        $stmt->bindValue(':altName', $altName);
        $stmt->execute();
    
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

     return true;
}

    /* $query = "select * from animes";
    $result = $conn->prepare($query);
    $result->execute();
    $animes = $result->fetchAll();

    echo "<pre>";
    print_r($animes); */
?>