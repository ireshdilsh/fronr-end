# CosmoSphere Frontend

CosmoSphere is a Vite + React frontend for the space-exploration backend. The existing UI is unchanged; the data and account actions now use the API gateway.

## Run locally

```powershell
npm install
$env:VITE_API_BASE_URL = "http://localhost:8088/api"
npm run dev
```

The default gateway URL is already `http://localhost:8088/api`, so the environment variable is optional. Use it when the gateway is hosted elsewhere.

Start the backend services before using live features:

1. `service-registry` on `8761`
2. `back-end/space-exploration-article-service` on `8080`
3. `auth` on `8081`
4. `like-comment` on `8082`
5. `api-gateway` on `8088`

The gateway must be configured with `FRONTEND_ORIGIN` when the frontend is not running on `http://localhost:5173`.

## API integrations

`src/api.js` owns all HTTP calls and automatically attaches the JWT stored after login or registration.

- Auth: `POST /api/v1/auth/register`, `POST /api/v1/auth/login`, `GET /api/v1/auth/me`
- Articles: `GET /api/v1/posts`, `GET /api/v1/posts/{id}`, `POST /api/v1/posts`, `PUT`/`DELETE /api/v1/posts/{id}`
- Images: `POST /api/v1/posts/{id}/images`
- Interactions: `GET /api/v1/posts/{id}/interactions`, `POST /api/v1/posts/{id}/likes`
- Comments: `GET`/`POST /api/v1/posts/{id}/comments`, `DELETE /api/v1/posts/{id}/comments/{commentId}`

The Articles screen, global search, dashboard cards, auth modal, article likes/comments, and Publish Article screen use live backend data. Favorites remain browser-local because the backend currently has no favorites endpoint.

## Image note

The article service accepts image metadata (`fileName`, `blobUrl`, and `contentType`) but does not expose a file-upload or blob-storage endpoint. The frontend sends the selected browser object URL as `blobUrl`; configure a real upload service and pass its permanent URL before production deployment.

## Validation

```powershell
npm run build
```
