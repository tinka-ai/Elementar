<?php
// send-email.php - WordPress compatible email handler
// Place this file in your WordPress theme directory: /wp-content/themes/elementar/

// Allow CORS for your domain
header('Access-Control-Allow-Origin: https://elementar.md');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Câmpurile obligatorii nu sunt completate.']);
    exit();
}

// Sanitize input data
$name = sanitize_text_field($data['name']);
$email = sanitize_email($data['email']);
$phone = sanitize_text_field($data['phone'] ?? '');
$visitType = sanitize_text_field($data['visitType'] ?? '');
$groupSize = sanitize_text_field($data['groupSize'] ?? '');
$preferredDate = sanitize_text_field($data['preferredDate'] ?? '');
$message = sanitize_textarea_field($data['message']);

// Validate email
if (!is_email($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Adresa de email nu este validă.']);
    exit();
}

// Prepare email content
$subject = 'Mesaj nou de la ' . $name . ' - ' . ($visitType ?: 'Contact general');
$to = 'office@elementar.md';

$email_content = "
<html>
<head>
    <title>Mesaj nou de pe site-ul ELEMENTAR</title>
</head>
<body>
    <h2>Mesaj nou de pe site-ul ELEMENTAR</h2>
    
    <h3>Informații de contact:</h3>
    <p><strong>Nume:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>";

if ($phone) {
    $email_content .= "<p><strong>Telefon:</strong> {$phone}</p>";
}

$email_content .= "
    <h3>Detalii vizită:</h3>";

if ($visitType) {
    $email_content .= "<p><strong>Tipul vizitei:</strong> {$visitType}</p>";
}

if ($groupSize) {
    $email_content .= "<p><strong>Numărul de persoane:</strong> {$groupSize}</p>";
}

if ($preferredDate) {
    $email_content .= "<p><strong>Data preferată:</strong> {$preferredDate}</p>";
}

$email_content .= "
    <h3>Mesaj:</h3>
    <p>" . nl2br($message) . "</p>
    
    <hr>
    <p><small>Acest mesaj a fost trimis prin formularul de contact de pe site-ul ELEMENTAR.</small></p>
</body>
</html>";

// Email headers
$headers = array(
    'Content-Type: text/html; charset=UTF-8',
    'From: ELEMENTAR Contact <noreply@elementar.md>',
    'Reply-To: ' . $email
);

// Send email using WordPress wp_mail function
if (function_exists('wp_mail')) {
    $sent = wp_mail($to, $subject, $email_content, $headers);
} else {
    // Fallback to PHP mail() if WordPress is not available
    $headers_string = implode("\r\n", $headers);
    $sent = mail($to, $subject, $email_content, $headers_string);
}

// Return response
if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Mesajul a fost trimis cu succes!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Eroare la trimiterea emailului. Vă rugăm să încercați din nou.']);
}

// Helper functions if WordPress is not loaded
if (!function_exists('sanitize_text_field')) {
    function sanitize_text_field($str) {
        return strip_tags(trim($str));
    }
}

if (!function_exists('sanitize_email')) {
    function sanitize_email($email) {
        return filter_var(trim($email), FILTER_SANITIZE_EMAIL);
    }
}

if (!function_exists('sanitize_textarea_field')) {
    function sanitize_textarea_field($str) {
        return strip_tags(trim($str));
    }
}

if (!function_exists('is_email')) {
    function is_email($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
}
?>
