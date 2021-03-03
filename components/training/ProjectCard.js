import React from 'react';
import Image from 'next/image';
export default () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="card card-flip h-100">
              <div class="card-front text-white bg-dark">
                <div class="card-body">
                  <h4 class="card-title">Book Finder App</h4>
                </div>
              </div>
              <div class="card-back bg-white">
                <div class="card-body">
                  <h6 class="card-title">
                    Use the Google APIs Explorer to create the "Who Wrote It?" app,
                    which queries the Books API using a worker thread and displays
                    the result in the UI.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card card-flip h-100">
              <div class="card-front text-white bg-dark">
                <div class="card-body">
                  <h4 class="card-title">Note taking App</h4>
                </div>
              </div>
              <div class="card-back bg-white text-dark">
                <div class="card-body">
                  <h6 class="card-title">
                    Create a note taking / ToDo app that utilizes Room DB to persist
                    app data locally and modify app content using LiveData.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card card-flip h-100">
              <div class="card-front text-white bg-dark">
                <div class="card-body">
                  <h4 class="card-title">Simple browser app</h4>
                </div>
              </div>
              <div class="card-back bg-white">
                <div class="card-body text-dark">
                  <h6 class="card-title">
                    Create a browser app using WebView and use it to display webpages
                    along with navigation support.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottompad" />
    </>
  );
};
