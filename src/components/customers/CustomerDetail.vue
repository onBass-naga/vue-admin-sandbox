<template>
  <div class="edit-page">
    <div style="color: rgba(0, 0, 0, 0.87); background-color: rgb(255, 255, 255); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; box-sizing: border-box; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; border-radius: 2px; z-index: 1; opacity: 1;">
      <div style="padding-bottom: 0px;">
        <div style="padding: 8px; position: relative; z-index: 2; display: inline-block; float: right;">
          <a tabindex="0" href="#/customers" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: inherit; background-color: rgba(0, 0, 0, 0); text-align: center;">
            <div>
              <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(0, 188, 212); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 12px; margin-right: 0px;">
                <path d="M 3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
              </svg>
              <span style="position: relative; padding-left: 8px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                List
              </span>
            </div>
          </a>
          <a tabindex="0" href="#/customers/121/delete" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(255, 64, 129); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: inherit; background-color: rgba(0, 0, 0, 0); text-align: center;">
            <div>
              <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(255, 64, 129); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 12px; margin-right: 0px;">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
              <span style="position: relative; padding-left: 8px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                Delete
              </span>
            </div>
          </a>
          <button tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
            <div>
              <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(0, 188, 212); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 12px; margin-right: 0px;">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
              </svg>
              <span style="position: relative; padding-left: 8px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                Refresh
              </span>
            </div>
          </button>
        </div>
        <div class="title" style="padding: 16px; position: relative;">
          <span style="font-size: 24px; color: rgba(0, 0, 0, 0.87); display: block; line-height: 36px;">
            <span>
              <img size="32" src="https://robohash.org/06df078dcb46cb783f42ac5f1007a0e6.png?size=32x32" style="color: rgb(255, 255, 255); background-color: rgb(188, 188, 188); user-select: none; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; border-radius: 50%; height: 32px; width: 32px; vertical-align: middle;">
              <span style="display: inline-block; width: 10.6667px;">&nbsp;</span>
              Cornelia Bryant
              </span>
            </span>
            <span style="font-size: 14px; color: rgba(0, 0, 0, 0.54); display: block;"></span>
        </div>
        <form class="tabbed-form">
          <div style="padding: 0px 1em 1em;">
            <div value="0">
              <div style="width: 100%; background-color: white; white-space: nowrap; display: flex;">
                <button class="form-tab" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: 14px; font-weight: 500; position: relative; color: rgb(0, 188, 212); width: 20%; text-transform: uppercase; background: none;">
                  <div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 48px;">
                      <!-- react-text: 2304 -->Identity<!-- /react-text -->
                    </div>
                  </div>
                </button>
                <button class="form-tab" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: 14px; font-weight: 500; position: relative; color: rgb(117, 117, 117); width: 20%; text-transform: uppercase; background: none;">
                  <div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 48px;">
                      <!-- react-text: 2308 -->Address<!-- /react-text -->
                    </div>
                  </div>
                </button>
                <button class="form-tab" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: 14px; font-weight: 500; position: relative; color: rgb(117, 117, 117); width: 20%; text-transform: uppercase; background: none;">
                  <div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 48px;">
                      <!-- react-text: 2312 -->Orders<!-- /react-text -->
                    </div>
                  </div>
                </button>
                <button class="form-tab" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: 14px; font-weight: 500; position: relative; color: rgb(117, 117, 117); width: 20%; text-transform: uppercase; background: none;">
                  <div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 48px;">
                      <!-- react-text: 2316 -->Reviews<!-- /react-text -->
                    </div>
                  </div>
                </button>
                <button class="form-tab" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: 14px; font-weight: 500; position: relative; color: rgb(117, 117, 117); width: 20%; text-transform: uppercase; background: none;">
                  <div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 48px;">
                      <!-- react-text: 2320 -->Stats<!-- /react-text -->
                    </div>
                  </div>
                </button>
              </div>
              <div style="width: 100%;">
                <div style="left: 0%; width: 20%; bottom: 0px; display: block; background-color: rgb(0, 188, 212); height: 2px; margin-top: -2px; position: relative; transition: left 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                </div>
              </div>
              <div style="border-top: 1px solid rgb(224, 224, 224);">
                <div style="width: 100%; position: relative; text-align: initial;">
                  <span>
                    <div class="aor-input aor-input-first_name" style="display: inline-block;">
                      <div style="font-size: 16px; line-height: 24px; width: 256px; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                      <label for="firstname-undefined-objectObject-55108" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                        <span><!-- react-text: 2330 -->First name<!-- /react-text --></span>
                      </label>
                      <input type="text" name="first_name" value="Cornelia" id="firstname-undefined-objectObject-55108" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box; margin-top: 14px;">
                      <div>
                        <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                        <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                      </div>
                    </div>
                  </div>
                  <div class="aor-input aor-input-last_name" style="display: inline-block; margin-left: 32px;">
                    <div style="font-size: 16px; line-height: 24px; width: 256px; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                      <label for="lastname-undefined-objectObject-1986" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                        <span><!-- react-text: 2339 -->Last name<!-- /react-text --></span>
                      </label>
                      <input type="text" name="last_name" value="Bryant" id="lastname-undefined-objectObject-1986" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box; margin-top: 14px;">
                      <div>
                        <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                        <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                      </div>
                    </div>
                  </div>
                  <div class="aor-input aor-input-email" style="width: 544px;">
                    <div style="font-size: 16px; line-height: 24px; width: 100%; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                      <label for="email-undefined-objectObject-42459" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                        <span><!-- react-text: 2348 -->Email<!-- /react-text --></span>
                      </label>
                      <input type="email" name="email" value="zenfir@pipdev.com" id="email-undefined-objectObject-42459" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box; margin-top: 14px;">
                      <div>
                        <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                        <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                      </div>
                    </div>
                  </div>
                  <div class="aor-input aor-input-birthday">
                    <div>
                      <div style="font-size: 16px; line-height: 24px; width: 256px; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                        <label for="birthday-undefined-objectObject-11069" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(1) translate(0px, 0px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                          <span><!-- react-text: 2358 -->Birthday<!-- /react-text --></span>
                        </label>
                        <input type="text" name="birthday" value="" id="birthday-undefined-objectObject-11069" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box; margin-top: 14px;">
                        <div>
                          <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                          <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                        </div>
                      </div>
                      <div>
                        <div style="display: none;"><!-- react-empty: 2365 --><!-- react-empty: 2366 -->
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
              <div style="width: 100%; position: relative; text-align: initial; height: 0px; overflow: hidden;">
                <span>
                  <div class="aor-input aor-input-address" style="max-width: 544px;">
                    <div style="font-size: 16px; line-height: 24px; width: 100%; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                      <label for="address-undefined-objectObject-41624" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(1) translate(0px, 0px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                        <span><!-- react-text: 2373 -->Address<!-- /react-text --></span>
                      </label>
                    <div style="position: relative; padding: 0px; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box;">
                      <!-- react-empty: 2375 -->
                      <textarea tabindex="-1" rows="1" readonly="" style="height: auto; width: 100%; resize: none; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; padding: 0px; cursor: inherit; position: absolute; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 36px; margin-bottom: -36px; box-sizing: border-box; overflow: hidden; visibility: hidden;"></textarea>
                      <textarea name="address" id="address-undefined-objectObject-41624" rows="1" style="height: 24px; width: 100%; resize: none; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; padding: 0px; cursor: inherit; position: relative; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 36px; margin-bottom: -36px; box-sizing: border-box;"></textarea>
                    </div>
                    <div>
                      <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                      <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                    </div>
                  </div>
                </div>
                <div class="aor-input aor-input-zipcode" style="display: inline-block;">
                  <div style="font-size: 16px; line-height: 24px; width: 256px; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                    <label for="zipcode-undefined-objectObject-15818" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(1) translate(0px, 0px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                      <span><!-- react-text: 2385 -->Zipcode<!-- /react-text --></span>
                    </label>
                    <input type="text" name="zipcode" value="" id="zipcode-undefined-objectObject-15818" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box; margin-top: 14px;">
                    <div>
                      <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                      <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                    </div>
                  </div>
                </div>
                <div class="aor-input aor-input-city" style="display: inline-block; margin-left: 32px;">
                  <div style="font-size: 16px; line-height: 24px; width: 256px; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                    <label for="city-undefined-objectObject-40230" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(1) translate(0px, 0px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                      <span><!-- react-text: 2394 -->City<!-- /react-text --></span>
                    </label>
                    <input type="text" name="city" value="" id="city-undefined-objectObject-40230" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box; margin-top: 14px;">
                    <div>
                      <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                      <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div style="width: 100%; position: relative; text-align: initial; height: 0px; overflow: hidden;">
              <span>
                <div class="aor-input aor-input-">
                  <div style="height: auto; overflow: auto;">
                    <div style="height: inherit; overflow-x: hidden; overflow-y: auto;">
                      <table style="background-color: rgb(255, 255, 255); width: 100%; border-collapse: collapse; border-spacing: 0px; table-layout: auto; font-family: Roboto, sans-serif;">
                        <thead style="border-bottom: 1px solid rgb(224, 224, 224);">
                          <tr style="border-bottom: 1px solid rgb(224, 224, 224); color: rgba(0, 0, 0, 0.87); height: 48px; border-top-color: rgb(224, 224, 224); border-right-color: rgb(224, 224, 224); border-left-color: rgb(224, 224, 224);">
                            <th style="font-weight: normal; font-size: 12px; padding: 0px 0px 0px 12px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <button data-sort="date" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                              <div>
                                <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                <span><!-- react-text: 2503 -->Date<!-- /react-text --></span>
                                </span>
                              </div>
                              </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                            <button data-sort="reference" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                              <div>
                                <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                  <span><!-- react-text: 2509 -->Reference<!-- /react-text --></span>
                                </span>
                              </div>
                            </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: right; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                <span><!-- react-text: 2513 -->Nb Items<!-- /react-text --></span>
                              </span>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: right; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <button data-sort="total" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                                <div>
                                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                    <span><!-- react-text: 2519 -->Total<!-- /react-text --></span>
                                  </span>
                                </div>
                              </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <button data-sort="status" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                                <div>
                                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                    <span><!-- react-text: 2525 -->Status<!-- /react-text --></span>
                                  </span>
                                </div>
                              </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                <span><!-- react-text: 2529 --><!-- /react-text --></span>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="datagrid-body"></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div style="width: 100%; position: relative; text-align: initial; height: 0px; overflow: hidden;">
              <span>
                <div class="aor-input aor-input-">
                  <div style="height: auto; overflow: auto;">
                    <div style="height: inherit; overflow-x: hidden; overflow-y: auto;">
                      <table style="background-color: rgb(255, 255, 255); width: 100%; border-collapse: collapse; border-spacing: 0px; table-layout: auto; font-family: Roboto, sans-serif;">
                        <thead style="border-bottom: 1px solid rgb(224, 224, 224);">
                          <tr style="border-bottom: 1px solid rgb(224, 224, 224); color: rgba(0, 0, 0, 0.87); height: 48px; border-top-color: rgb(224, 224, 224); border-right-color: rgb(224, 224, 224); border-left-color: rgb(224, 224, 224);">
                            <th style="font-weight: normal; font-size: 12px; padding: 0px 0px 0px 12px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <button data-sort="date" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                                <div>
                                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                    <span><!-- react-text: 2541 -->Date<!-- /react-text --></span>
                                  </span>
                                </div>
                              </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <button data-sort="product_id" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                                <div>
                                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                    <span><!-- react-text: 2547 -->Product<!-- /react-text --></span>
                                  </span>
                                </div>
                              </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <button data-sort="rating" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                                <div>
                                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                    <span><!-- react-text: 2553 -->Rating<!-- /react-text --></span>
                                  </span>
                                </div>
                              </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <button data-sort="comment" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                                <div>
                                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                    <span><!-- react-text: 2559 -->Comment<!-- /react-text --></span>
                                  </span>
                                </div>
                              </button>
                            </th>
                            <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                              <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                                <span><!-- react-text: 2563 --><!-- /react-text --></span>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="datagrid-body"></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div style="width: 100%; position: relative; text-align: initial; height: 0px; overflow: hidden;">
              <span>
                <div class="aor-input aor-input-groups">
                  <div style="font-size: 16px; line-height: 24px; width: 256px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: text; margin-top: 14px;">
                    <div>
                      <label for="groups-undefined-objectObject-17700" style="position: absolute; line-height: 22px; top: 28px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(1) translate(0px, 0px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                        <span><!-- react-text: 2420 -->Segments<!-- /react-text --></span>
                      </label>
                      <div style="margin-top: 12px;"></div>
                    </div>
                    <div style="display: inline-block; position: relative; width: 256px; padding: 0px; margin-top: 0px; margin-bottom: 24px; line-height: inherit; height: 32px; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: initial; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; font-family: inherit; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); float: left; box-sizing: border-box;">
                      <div style="font-size: 16px; line-height: 24px; width: 256px; height: 48px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                        <input type="text" autocomplete="off" name="groups" value="" id="groups-undefined-objectObject-17700" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%;">
                      </div>
                    <div style="display: none;"><!-- react-empty: 2426 --><!-- react-empty: 2427 --></div>
                  </div>
                  <div>
                    <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                    <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                  </div>
                </div>
              </div>
              <div class="aor-input aor-input-has_newsletter">
                <div style="font-size: 16px; line-height: 24px; width: 256px; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                  <label for="undefined-undefined-objectObject-8883" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                    <span><!-- react-text: 2435 -->Has newsletter<!-- /react-text --></span>
                  </label>
                  <div id="undefined-undefined-objectObject-8883" style="display: block; font-size: inherit; height: 100%; font-family: inherit; outline: none; position: relative; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; padding: 0px; width: 100%; border: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box; margin-top: 14px;">
                    <div style="cursor: pointer; height: 100%; position: relative; width: 100%;">
                      <div style="box-sizing: border-box; content: &quot; &quot;; display: table;">
                      </div>
                      <div style="color: rgba(0, 0, 0, 0.87); height: 56px; line-height: 56px; overflow: hidden; opacity: 1; position: relative; padding-left: 0px; padding-right: 56px; text-overflow: ellipsis; top: 6px; white-space: nowrap;">
                        Yes
                      </div>
                      <button tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 12px; outline: none; font-size: 0px; font-weight: inherit; position: absolute; overflow: visible; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; width: 48px; height: 48px; fill: rgb(224, 224, 224); right: 0px; top: 8px; background: none;">
                        <div>
                          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: inherit; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                            <path d="M7 10l5 5 5-5z"></path>
                          </svg>
                        </div>
                      </button>
                      <div style="border-top: none; bottom: 1px; left: 0px; margin: -1px 24px; right: 0px; position: absolute;"></div>
                      <div style="box-sizing: border-box; content: &quot; &quot;; clear: both; display: table;"></div>
                    </div>
                    <div style="display: none;"><!-- react-empty: 2447 --><!-- react-empty: 2448 --></div>
                  </div>
                  <div>
                    <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                    <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                  </div>
                </div>
              </div>
              <div class="aor-input aor-input-first_seen" style="width: 128px; display: inline-block;">
                <div style="font-size: 16px; line-height: 24px; width: 100%; height: auto; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: not-allowed; padding-top: 2em;">
                  <label for="undefined-undefined-objectObject-32854" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                    <span><!-- react-text: 2456 -->First seen<!-- /react-text --></span>
                  </label>
                  <span>2017/9/13</span>
                </div>
              </div>
              <div class="aor-input aor-input-latest_purchase" style="width: 128px; display: inline-block;">
                <div style="font-size: 16px; line-height: 24px; width: 100%; height: auto; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: not-allowed; padding-top: 2em;">
                  <label for="undefined-undefined-objectObject-57745" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                  <span><!-- react-text: 2462 -->Latest purchase<!-- /react-text --></span>
                  </label><!-- react-empty: 2463 -->
                </div>
              </div>
              <div class="aor-input aor-input-last_seen" style="width: 128px; display: inline-block;">
                <div style="font-size: 16px; line-height: 24px; width: 100%; height: auto; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: not-allowed; padding-top: 2em;">
                  <label for="undefined-undefined-objectObject-37025" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                    <span><!-- react-text: 2468 -->Last seen<!-- /react-text --></span>
                  </label>
                  <span>2017/9/13</span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style="box-sizing: border-box; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(232, 232, 232); height: 56px; padding: 0px 24px; display: flex; justify-content: space-between;">
      <div style="position: relative; display: flex; justify-content: space-between; align-items: center;">
        <div style="color: rgba(0, 0, 0, 0.87); background-color: rgb(255, 255, 255); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; box-sizing: border-box; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; border-radius: 2px; display: inline-block; min-width: 88px; margin: 10px 24px; position: relative;">
        <button tabindex="0" type="submit" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; width: 100%; border-radius: 2px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; background-color: rgb(0, 188, 212); text-align: center;">
          <div>
            <div style="height: 36px; border-radius: 2px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; top: 0px;">
              <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(255, 255, 255); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 12px; margin-right: 0px;">
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
              </svg>
              <span style="position: relative; opacity: 1; font-size: 14px; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; margin: 0px; user-select: none; padding-left: 8px; padding-right: 16px; color: rgb(255, 255, 255);">Save</span>
            </div>
          </div>
        </button>
        </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerDetail'
}
</script>

<style scoped>
</style>
