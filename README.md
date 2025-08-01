<h3 align="center">HTTP Error</h3>
<p align="center">Convenient HTTP Error Utilities</p>

---

### Usage

Enjoy hassle-free HTTP error status handling:

```ts
import { ErrorCode, HttpError, raise } from "@wvm/http-error";

// ErrorCode Mapper
ErrorCode[404]; // NOT_FOUND
ErrorCode.NOT_FOUND; // 404

// HttpError Raiser
throw raise(404)`Missing Page`;
throw raise("NOT_FOUND")`Missing Page`;

// ->
error.status; // 404
error.phrase; // NOT_FOUND
error.message; // Missing Page

// Handle HttpError
if (error instanceof HttpError) {
  switch (error.phrase) {
    // ...
  }

  res.status(error.status).send(error.message);
}
```
