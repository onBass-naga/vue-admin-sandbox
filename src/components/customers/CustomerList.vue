<template>
  <div class="list-page">
    <div style="color: rgba(0, 0, 0, 0.87); background-color: rgb(255, 255, 255); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; box-sizing: border-box; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; border-radius: 2px; z-index: 1; opacity: 1;">
      <div style="padding-bottom: 0px;">
        <div style="display: flex; justify-content: space-between;">
          <div class="title" style="padding: 16px; position: relative;">
            <span style="font-size: 24px; color: rgba(0, 0, 0, 0.87); display: block; line-height: 36px;">
              <span>Customers List</span>
            </span>
            <span style="font-size: 14px; color: rgba(0, 0, 0, 0.54); display: block;"></span>
          </div>
          <div style="padding: 8px; position: relative; z-index: 2; display: flex; justify-content: flex-end; flex-wrap: wrap;">
            <div style="display: inline-block;">
              <button class="add-filter" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                <div>
                  <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(0, 188, 212); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 12px; margin-right: 0px;">
                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                  </svg>
                  <span style="position: relative; padding-left: 8px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">Add filter</span>
                </div>
              </button>
              <div style="display: none;">
                <!-- react-empty: 316 -->
                <!-- react-empty: 317 -->
              </div>
            </div>
            <button tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
              <div>
                <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(0, 188, 212); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 12px; margin-right: 0px;">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
                </svg>
                <span style="position: relative; padding-left: 8px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">Refresh</span>
              </div>
            </button>
          </div>
        </div>
        <div>
          <div style="padding: 0px 16px 16px; font-size: 14px; color: rgba(0, 0, 0, 0.87); margin-top: -14px; display: flex; justify-content: flex-end; align-items: flex-end; flex-wrap: wrap;">
            <div data-source="q" class="filter-field" style="display: flex; align-items: flex-end;">
              <div style="width: 48px;">&nbsp;</div>
              <div>
                <div style="font-size: 16px; line-height: 24px; width: 256px; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: Roboto, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                  <label for="q-undefined-objectObject-27556" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(1) translate(0px, 0px); transform-origin: left top 0px; pointer-events: none; user-select: none; color: rgba(0, 0, 0, 0.3);">
                    <span>Search</span>
                  </label>
                  <input type="text" name="q" value="" id="q-undefined-objectObject-27556" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0.87); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 100%; box-sizing: border-box; margin-top: 14px;">
                  <div>
                    <hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                    <hr aria-hidden="true" style="border-top: none rgb(0, 188, 212); border-left: none rgb(0, 188, 212); border-right: none rgb(0, 188, 212); border-bottom: 2px solid rgb(0, 188, 212); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="clear: right;"></div>
        </div>
        <div>
          <div style="height: auto; overflow: auto;">
            <div style="height: inherit; overflow-x: hidden; overflow-y: auto;">
              <table style="background-color: rgb(255, 255, 255); width: 100%; border-collapse: collapse; border-spacing: 0px; table-layout: auto; font-family: Roboto, sans-serif;">
                <thead style="border-bottom: 1px solid rgb(224, 224, 224);">
                  <tr style="border-bottom: 1px solid rgb(224, 224, 224); color: rgba(0, 0, 0, 0.87); height: 48px; border-top-color: rgb(224, 224, 224); border-right-color: rgb(224, 224, 224); border-left-color: rgb(224, 224, 224);">
                    <th style="font-weight: normal; font-size: 12px; padding: 0px 0px 0px 12px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <button data-sort="last_name" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                      <div>
                        <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                          <span>Name</span>
                        </span>
                      </div>
                      </button>
                    </th>
                    <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <button data-sort="last_seen" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                        <div>
                          <span style="position: relative; padding-left: 16px; padding-right: 8px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                            <span>Last seen</span>
                          </span>
                          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgba(0, 0, 0, 0.87); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 0px; margin-right: 12px;">
                            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
                          </svg>
                        </div>
                      </button>
                    </th>
                    <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: right; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <button data-sort="nb_commands" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                        <div>
                          <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                            <span>Orders</span>
                          </span>
                        </div>
                      </button>
                    </th>
                    <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: right; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <button data-sort="total_spent" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                        <div>
                          <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                            <span>Total spent</span>
                          </span>
                        </div>
                      </button>
                    </th>
                    <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <button data-sort="latest_purchase" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                        <div>
                          <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                            <span>Latest purchase</span>
                          </span>
                        </div>
                      </button>
                    </th>
                    <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <button data-sort="has_newsletter" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                        <div>
                          <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                            <span>News.</span>
                          </span>
                        </div>
                      </button>
                    </th>
                    <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <button data-sort="groups" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 40px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                        <div>
                          <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                            <span>Segments</span>
                          </span>
                        </div>
                      </button>
                    </th>
                    <th style="font-weight: normal; font-size: 12px; padding: 0px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(158, 158, 158); position: relative;">
                      <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">
                        <span></span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody class="datagrid-body">
                  <tr class="tr" :class="{'tr-odd': index % 2 === 0}" v-for="(customer, index) in customers" :key="customer.id">
                    <td class="column column-profile">
                      <span>
                        <img class="icon" size="25" src="https://robohash.org/06df078dcb46cb783f42ac5f1007a0e6.png?size=25x25">
                        <span class="icon-spacer">&nbsp;</span>
                        {{customer.name}}
                      </span>
                    </td>
                    <td class="column">
                      <span>{{customer.birthday}}</span>
                    </td>
                    <td class="column column-nbcommands">
                      <span>0</span>
                    </td>
                    <td class="column column-totalspent">
                      <span>$0.00</span>
                    </td>
                    <td class="column">
                      <!-- react-empty: 405 -->
                    </td>
                    <td class="column">
                      <svg viewBox="0 0 24 24" style="display: block; color: rgba(0, 0, 0, 0.87); fill: currentcolor; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; margin: auto;">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                      </svg>
                    </td>
                    <td class="column">
                      <span style="display: flex; flex-wrap: wrap;"></span>
                    </td>
                    <td class="column column-undefined">
                      <router-link :to="{name: 'CustomerDetail', params: { id: customer.id }}" tabindex="0" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 12px; outline: none; font-size: 0px; font-weight: inherit; position: relative; overflow: inherit; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; width: 48px; height: 48px; background: none;">
                        <div>
                          <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(0, 188, 212); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                          </svg>
                        </div>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style="box-sizing: border-box; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(232, 232, 232); height: 56px; padding: 0px 24px; display: flex; justify-content: space-between;">
            <!-- <div style="position: relative; margin-left: -24px; display: flex; justify-content: space-between; align-items: center;">
              <span class="displayed-records" style="padding: 1.2em;">1-25 of 900</span>
            </div>
            <div style="position: relative; display: flex; justify-content: space-between; align-items: center;">
              <button class="page-number" data-page="1" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 10px 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgba(0, 0, 0, 0.87); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                <div>
                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">1</span>
                </div>
              </button>
              <button class="page-number" data-page="2" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 10px 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                <div>
                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">2</span>
                </div>
              </button>
              <span style="padding: 1.2em;">…</span>
              <button class="page-number" data-page="36" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 10px 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                <div>
                  <span style="position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">36</span>
                </div>
              </button>
              <button class="next-page" tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: Roboto, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 10px 0px; padding: 0px; outline: none; font-size: inherit; font-weight: inherit; position: relative; height: 36px; line-height: 36px; min-width: 88px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; user-select: none; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center;">
                <div>
                  <span style="position: relative; padding-left: 16px; padding-right: 8px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;">Next</span>
                  <svg viewBox="0 0 24 24" style="display: inline-block; color: rgba(0, 0, 0, 0.87); fill: rgb(0, 188, 212); height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; vertical-align: middle; margin-left: 0px; margin-right: 12px;">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                  </svg>
                </div>
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerList',
  computed: {
    customers () { return this.$store.getters.customers() }
  }
}
</script>

<style scoped>
.tr {
  border-bottom: 1px solid rgb(224, 224, 224); 
  color: rgba(0, 0, 0, 0.87); 
  height: 48px;
}
.tr-odd {
  background-color: rgba(127, 221, 233, 0.4)
}
.icon {
  color: rgb(255, 255, 255); 
  background-color: rgb(188, 188, 188); 
  user-select: none; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 12.5px; 
  border-radius: 50%; 
  height: 25px; 
  width: 25px; 
  vertical-align: middle;
}
.icon-spacer {
  display: inline-block; 
  width: 8.33333px;
}
.column {
  padding: 0px 12px; 
  height: 48px; 
  text-align: left; 
  font-size: 13px; 
  overflow: hidden; 
  white-space: normal; 
  text-overflow: ellipsis; 
  background-color: inherit;
}
.column-profile {
  padding: 0px 12px 0px 16px; 
}
.column-nbcommands {
  text-align: right; 
  color: purple;
}
.column-totalspent {
  text-align: right; 
}
.column-undefined {
  padding: 0px;
}
</style>
