<h3 align="center">
        HTTP Error
</h3>
<p align="center">Convenient HTTP Error Utilities</p>

---

### Usage

Add this package to your project:

```bash
deno add jsr:@wvm/http-error
```

And enjoy hassle-free HTTP error status handling:

```ts
import { ErrorCode, HttpError, raise } from "@wvm/http-error";

// ErrorCode Mapper
ErrorCode.NOT_FOUND; // 404
ErrorCode[404]; // NOT_FOUND

// HttpError Raiser
throw raise("NOT_FOUND")`Missing Page`;
throw raise(404)`Missing Page`;

// ->
error.status; // 404
error.phrase; // NOT_FOUND
error.message; // 404 NOT_FOUND: Missing Page

// HttpError Result
if (error instanceof HttpError) {
  res.status(error.status).send(error.message);
}
```
