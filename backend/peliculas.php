<?php
header("Access-Control-Allow-Origin: http://ecocine.com.pe");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
require_once 'conexion.php';

$accion = $_GET['accion'] ?? 'nada' ;
switch ($accion) {
    case 'id':
        $id = $_GET['id'] ?? 0;
        $stmt = $pdo->prepare("SELECT * FROM peliculas WHERE id = ?");
        $stmt->execute([intval($id)]);
        $pelicula = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($pelicula) {
            if ($pelicula['imagen']) {
                $pelicula['imagen'] = base64_encode($pelicula['imagen']);
            }
            echo json_encode(["status" => true, "datos" => $pelicula]);
        } else {
            http_response_code(404);
            echo json_encode(["status" => false, "mensaje" => "No existe"]);
        }
        break;
    case 'top3':
        $stmt = $pdo->query("SELECT * FROM peliculas ORDER BY ventas_totales DESC  LIMIT 3");
        $peliculas = $stmt->fetch(PDO::FETCH_ASSOC);
        foreach ($peliculas as &$p){
            if ($p['imagen']){
                $p['imagen'] = base64_encode($p['imagen']);
            }
        }
        echo json_encode($peliculas);
        break;
    case 'todas':
        $stmt = $pdo->query("SELECT * FROM peliculas");
        foreach ($peliculas as &$p){
            if ($p['imagen']){
                $p['imagen'] = base64_encode($p['imagen']);
            }
        }
        echo json_encode($peliculas);
        break;
    case 'nada':
    default:
        http_response_code(400);
        echo json_encode(['status'=> false,'error'=> 'Acción no válida']);
        break;
}
