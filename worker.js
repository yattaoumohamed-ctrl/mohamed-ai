self.onmessage = function (event) {
const data = event.data;

if (!data || typeof data !== "object") {
self.postMessage({
success: false,
error: "Message invalide."
});
return;
}

if (data.action === "ping") {
self.postMessage({
success: true,
message: "Worker MHD AI opérationnel."
});
return;
}

self.postMessage({
success: false,
error: "Action non reconnue."
});
};