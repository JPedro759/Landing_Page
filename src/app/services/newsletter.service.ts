import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  #http = inject(HttpClient);
  #endpointUrl =
    'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = { name, email };

    return this.#http.post<NewsletterResponse>(this.#endpointUrl, data);
  }
}
