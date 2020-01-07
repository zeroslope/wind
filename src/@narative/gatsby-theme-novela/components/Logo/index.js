import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="43" fill="none">
      <g filter="url(#filter0_d)">
        <path fill="url(#paint0_linear)" d="M16.828 23.688c.75.093 1.219.328 1.406.703.188.656 0 .984-.562.984-.469 0-.938.047-1.406.14-.938.188-1.453-.843-1.547-3.093.094-1.688.89-2.86 2.39-3.516.47-.187 1.078-.281 1.828-.281 0-.094-.046-.281-.14-.563a7.15 7.15 0 01-.14-1.406c0-.281.046-.422.14-.422-.188 0-.422.047-.703.141-.657.375-1.219.094-1.688-.844-.562-.937-.61-1.969-.14-3.094.187-.75.797-1.218 1.828-1.406 2.718-.281 5.11-.187 7.172.281.562.282.937 0 1.125-.843.187-1.219.14-2.25-.141-3.094-.094-.844-.797-1.313-2.11-1.406-1.968-.188-3.703-.14-5.203.14-.937.282-1.64.047-2.109-.703-.562-.562-.61-1.453-.14-2.672.375-.562.703-.656.984-.28.187.562.234 1.03.14 1.405-.093.47.141.704.704.704h1.687c1.969-.094 3.422-.094 4.36 0 2.25-.188 3.28 1.406 3.093 4.78 0 1.22-.281 2.157-.843 2.813-.47.844-1.266.985-2.391.422-1.781-.375-3.844-.328-6.188.14-.75.188-1.03.657-.843 1.407.187.656.656.844 1.406.563 2.344-.47 4.734-.329 7.172.421.843.47 1.172 1.313.984 2.532-.375 2.25-.14 5.39.703 9.422.657 2.625 1.078 4.406 1.266 5.343.187.657.14 1.125-.14 1.407-.376.374-.657.234-.845-.422-1.5-4.22-2.343-9.188-2.53-14.907.093-1.5-.423-2.297-1.548-2.39-1.5-.282-3.093-.282-4.78 0l.28.281c.75.469 1.172 1.219 1.266 2.25.188 0 .469.047.844.14h.562c2.25 1.032 2.953 3 2.11 5.907 0 .75-.657 1.078-1.97.984-.562.094-.937-.187-1.124-.843-.281-.563.094-.797 1.125-.704.844.094 1.265-.422 1.265-1.547-.093-.843-.468-1.5-1.125-1.968-.28-.188-.843-.282-1.687-.282.094 3.282-.328 5.625-1.266 7.032-1.218 2.156-1.218 3.703 0 4.64.657.282 1.078.094 1.266-.562.094-1.313.75-2.531 1.969-3.656.843-.75 1.5-.985 1.968-.703.282.28.235.656-.14 1.125-1.5.656-2.297 1.78-2.39 3.375-.188 1.03-.61 1.78-1.266 2.25-.47.374-1.125.28-1.97-.282a4.664 4.664 0 01-1.405-2.11c-.563-1.312-.282-2.905.843-4.78.938-1.407 1.266-3.422.985-6.047l-.14-.282a6.52 6.52 0 00-1.267.141c-1.125.281-1.734.89-1.828 1.828 0 .844.282 1.313.844 1.407zM14.297 4.563c-.75.937-1.219 1.78-1.406 2.53-.188.657.14.938.984.845 4.781-.188 8.25-.188 10.406 0 .563 0 .75.234.563.703-.094.375-.375.562-.844.562-3.281-.094-6.61 0-9.984.281-.657.094-.938.375-.844.844.469 1.406.703 2.906.703 4.5.094 1.969 0 4.64-.281 8.016-.469 4.593-1.313 8.015-2.531 10.265-.094.282-.235.422-.422.422-.188-.093-.282-.328-.282-.703.094-1.312.704-4.266 1.829-8.86.374-2.062.515-4.874.421-8.437-.187-2.625-.515-4.406-.984-5.344-.375-.843-.422-1.828-.14-2.953.187-.937.75-2.203 1.687-3.796a6.89 6.89 0 00.422-.704c.187-.375.375-.562.562-.562.094 0 .235.187.422.562.375.563.281 1.172-.281 1.829z" />
        <path fill="url(#paint1_linear)" d="M16.828 23.688l-.041.246.01.002.031-.248zm1.406.703l.24-.07-.006-.021-.01-.021-.224.112zm-3.515-1.97l-.25-.013v.024l.25-.01zm2.39-3.515l-.093-.232-.007.003.1.23zm1.828-.281v.25h.25v-.25h-.25zm-.14-.563l-.245.05.003.015.005.015.237-.08zm-.703-1.687l-.08-.237-.023.008-.021.012.124.217zm-1.688-.844l.224-.112-.004-.008-.005-.008-.215.128zm-.14-3.094l.23.097.008-.018.004-.018-.242-.06zm1.828-1.406l-.026-.248h-.01l-.009.002.045.246zm7.172.281l.111-.223-.027-.014-.029-.006-.055.243zm1.125-.843l.244.054.002-.008v-.008l-.246-.038zm-.141-3.094l-.248.028.003.026.008.025.237-.079zm-2.11-1.406l-.023.249h.006l.018-.25zm-5.203.14l-.046-.245-.013.002-.012.004.072.24zm-2.109-.703l.212-.132-.015-.024-.02-.02-.177.176zm-.14-2.672l-.208-.138-.016.023-.01.026.233.09zm.984-.28l.237-.08-.013-.038-.024-.033-.2.15zm.14 1.405l-.242-.06-.003.011.245.05zm2.391.704v.25h.012l-.012-.25zm4.36 0l-.025.248.022.003.023-.002-.02-.25zm3.093 4.78l-.25-.013v.014h.25zm-.843 2.813l-.19-.162-.017.019-.012.022.218.121zm-2.391.422l.112-.223-.03-.015-.03-.006-.052.244zm-6.188.14l-.049-.245-.011.003.06.243zm-.843 1.407l-.243.06.002.009.24-.069zm1.406.563l-.05-.246-.019.004-.019.007.088.235zm7.172.421l.121-.218-.023-.013-.025-.008-.073.24zm.984 2.532l.247.04v-.002l-.247-.038zm.703 9.422l-.245.05.003.01.242-.06zm1.266 5.343l-.245.05.002.01.003.009.24-.069zm-.985.985l.24-.07-.001-.007-.003-.007-.235.084zm-2.53-14.907l-.25-.015-.001.012v.012l.25-.009zm-1.548-2.39l-.046.245.013.003h.013l.02-.248zm-4.78 0l-.042-.247-.48.08.344.343.177-.176zm.28.281l-.176.177.02.02.024.015.132-.212zm1.266 2.25l-.249.023.02.227h.229v-.25zm.844.14l-.06.243.029.008h.03v-.25zm.562 0l.104-.227-.05-.022h-.054v.25zm2.11 5.907l-.24-.07-.01.034v.036h.25zm-1.97.984l.019-.25-.03-.001-.03.005.042.246zm-1.124-.843l.24-.07-.006-.021-.01-.021-.224.111zm1.125-.704l.027-.248h-.005l-.022.248zm1.265-1.547h.25v-.013l-.001-.014-.248.027zm-1.125-1.968l.146-.204-.007-.004-.139.208zm-1.687-.282v-.25h-.257l.007.258.25-.008zm-1.266 7.032l-.208-.139-.005.008-.004.008.217.123zm0 4.64l-.152.198.025.02.029.012.098-.23zm1.266-.562l.24.069.008-.025.001-.026-.249-.018zm1.969-3.656l-.166-.187-.004.003.17.184zm1.968-.703l.177-.177-.021-.022-.027-.016-.128.215zm-.14 1.125l.1.229.057-.025.038-.048-.195-.157zm-2.39 3.375l.245.044.003-.015v-.015l-.249-.015zm-1.266 2.25l-.146-.204-.01.008.156.196zm-1.97-.282l-.162.19.012.01.012.008.139-.208zm-1.405-2.11l.237-.078-.003-.01-.005-.01-.23.099zm.843-4.78l-.208-.14-.006.011.214.129zm.985-6.047l.248-.027-.005-.045-.02-.04-.223.112zm-.14-.282l.223-.111-.07-.139h-.154v.25zm-1.267.141l-.049-.245-.011.003.06.242zm-1.828 1.828l-.248-.025-.002.013v.012h.25zM14.297 4.563l-.19-.163-.005.006.195.157zm-1.406 2.53l.24.07.002-.009-.242-.06zm.984.845l-.01-.25h-.009l-.009.001.028.248zm10.406 0l-.021.249H24.28v-.25zm.563.703l-.232-.093-.007.016-.004.016.243.06zM24 9.203l-.007.25H24v-.25zm-9.984.281l-.021-.249h-.007l-.008.002.036.247zm-.844.844l-.245.05.003.014.005.015.237-.079zm.703 4.5h-.25v.012l.25-.012zm-.281 8.016l.248.025v-.005l-.248-.02zm-2.531 10.265l-.22-.119-.01.02-.008.02.238.08zm-.422.422l-.112.224.053.026h.059v-.25zm-.282-.703l-.249-.018V32.828h.25zm1.829-8.86l.242.06.002-.007.002-.008-.246-.044zm.421-8.437l.25-.006v-.012l-.25.018zm-.984-5.344l-.229.102.005.01.224-.111zm-.14-2.953l.242.061.002-.012-.245-.049zm1.687-3.796l-.209-.14-.007.013.216.127zm1.406-.704l-.223.112.006.014.01.013.207-.139zm2.22 21.202c.731.091 1.085.31 1.213.566l.447-.223c-.247-.494-.83-.744-1.599-.84l-.062.497zm1.196.523c.089.311.065.473.023.546-.03.052-.106.12-.345.12v.5c.323 0 .622-.096.78-.372.145-.255.121-.586.023-.931l-.481.137zm-.322.666c-.486 0-.97.049-1.455.145l.098.49c.453-.09.905-.135 1.357-.135v-.5zm-1.455.145a.616.616 0 01-.45-.058c-.126-.074-.253-.211-.368-.441-.233-.466-.384-1.242-.43-2.36l-.5.021c.047 1.133.2 1.998.483 2.563.143.285.327.511.564.649.242.14.513.174.799.117l-.098-.49zm-1.249-2.834c.045-.808.257-1.476.626-2.018.367-.541.902-.97 1.616-1.283l-.2-.458c-.787.344-1.401.83-1.83 1.46-.428.63-.662 1.39-.71 2.271l.498.028zm2.234-3.298c.429-.171 1.003-.263 1.735-.263v-.5c-.767 0-1.412.096-1.92.3l.185.463zm1.985-.513c0-.08-.018-.174-.042-.272a5.187 5.187 0 00-.111-.37l-.474.159c.046.137.079.248.1.333a.78.78 0 01.027.15h.5zm-.145-.611a6.904 6.904 0 01-.136-1.358h-.5c0 .486.049.971.146 1.456l.49-.098zm-.136-1.358c0-.133.012-.206.023-.237.005-.015.003-.002-.017.018a.166.166 0 01-.115.047v-.5c-.213 0-.308.174-.343.277a1.3 1.3 0 00-.048.395h.5zm-.11-.672c-.224 0-.488.056-.781.154l.158.474c.269-.09.474-.128.624-.128v-.5zm-.826.174c-.273.156-.488.159-.678.064-.21-.105-.437-.353-.662-.803l-.447.224c.244.488.532.85.885 1.026.372.186.766.142 1.15-.077l-.248-.434zm-1.35-.755c-.516-.861-.566-1.808-.124-2.87l-.461-.192c-.495 1.189-.452 2.305.157 3.319l.429-.257zm-.112-2.905c.155-.62.655-1.043 1.63-1.22l-.089-.493c-1.087.198-1.806.712-2.026 1.592l.485.121zm1.611-1.218c2.7-.28 5.062-.185 7.091.276l.111-.487c-2.096-.477-4.515-.57-7.253-.286l.051.497zm7.035.256c.332.166.675.194.965-.024.261-.196.419-.552.516-.989l-.488-.108c-.09.407-.215.613-.328.698-.086.064-.211.091-.442-.024l-.223.447zm1.484-1.03c.191-1.243.147-2.317-.15-3.21l-.475.158c.265.794.314 1.783.13 2.977l.495.076zm-.14-3.159a1.552 1.552 0 00-.707-1.164c-.402-.269-.955-.415-1.633-.464l-.035.5c.635.044 1.09.18 1.39.38.29.193.45.455.488.804l.497-.056zM24.165 5.72c-1.985-.19-3.744-.143-5.273.144l.093.491c1.47-.276 3.181-.323 5.133-.137l.047-.498zm-5.298.15c-.435.13-.79.134-1.08.037-.286-.095-.536-.298-.746-.633l-.424.265c.26.414.595.704 1.012.843.414.138.879.118 1.381-.033l-.143-.48zm-1.861-.64c-.454-.455-.542-1.215-.084-2.406l-.467-.18c-.48 1.247-.474 2.268.197 2.939l.354-.354zm-.11-2.357c.183-.273.316-.37.389-.39a.083.083 0 01.063.004c.027.012.07.043.125.116l.4-.3a.848.848 0 00-.315-.27.581.581 0 00-.41-.031c-.256.073-.475.304-.667.594l.415.277zm.54-.34c.18.539.213.955.135 1.266l.485.121c.11-.44.05-.96-.146-1.546l-.474.158zm.132 1.277c-.055.278-.026.554.174.754.188.187.47.248.775.248v-.5c-.259 0-.375-.055-.421-.102-.035-.035-.076-.11-.037-.302l-.49-.098zm.949 1.002H20.203v-.5H19.775 19.762 19.75 19.72h-.017H19.636h-.033-.004H19.498h-.004-.031-.004-.019-.004-.034-.015H19.35h-.011-.011-.007H19.303 19.285h-.007-.007-.028-.007-.007-.017-.007-.01-.017-.01-.01-.01H19.135h-.01-.003H19.11h-.003-.01-.003-.003-.016-.003-.019-.003-.003-.003-.003H18.971h-.003-.003-.003-.003-.003H18.942h-.003-.003-.003-.011-.003-.003-.008-.003-.008-.003-.008-.003-.008-.003-.005-.003-.005-.003-.005-.003-.005-.003-.005-.005-.003-.005-.005-.003-.002-.003-.005-.005-.005-.005-.005-.005-.005-.002-.005-.005-.005-.002-.005-.005-.002-.005-.002-.003-.002-.007-.002-.003-.002-.002-.005-.002-.005-.002-.002-.007-.002-.007-.002-.002-.007-.002-.002-.002H18.657h-.002-.002-.002-.002-.002-.007-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.002-.003-.002-.002-.002-.002-.002-.002-.002-.003-.002-.002-.002-.002-.003-.002-.002-.002-.001-.002-.002-.002-.003-.002-.002-.003-.002-.002-.001-.002-.002-.001-.002-.002-.003-.002-.001v.5zm1.699 0c1.967-.093 3.404-.093 4.323 0l.05-.498c-.957-.096-2.426-.095-4.397-.001l.024.5zm4.368 0c1.054-.088 1.776.238 2.23.941.473.73.687 1.906.594 3.577l.499.028c.095-1.704-.113-3.012-.673-3.877-.576-.89-1.495-1.267-2.691-1.168l.041.499zm2.823 4.532c0 1.183-.273 2.054-.783 2.65l.38.325c.614-.717.903-1.721.903-2.975h-.5zm-.812 2.69c-.206.371-.465.56-.774.614-.324.057-.747-.024-1.286-.293l-.224.447c.586.293 1.123.422 1.597.339.487-.086.86-.39 1.124-.863l-.437-.243zm-2.12.3c-1.824-.384-3.922-.334-6.289.14l.098.49c2.32-.464 4.348-.507 6.087-.141l.103-.49zm-6.3.142c-.413.103-.74.295-.927.606-.187.312-.202.691-.099 1.104l.485-.122c-.084-.337-.052-.567.042-.724.095-.158.282-.294.62-.379l-.121-.485zm-1.024 1.718c.107.374.31.664.64.796.318.127.694.082 1.095-.068l-.176-.469c-.35.131-.583.133-.733.073-.14-.056-.264-.188-.345-.47l-.48.138zm1.696.739c2.3-.46 4.649-.323 7.05.415l.146-.478c-2.474-.76-4.907-.905-7.294-.428l.098.49zm7.001.395c.375.208.626.493.768.856.143.37.18.837.091 1.419l.494.076c.098-.638.065-1.2-.12-1.676a2.14 2.14 0 00-.99-1.112l-.243.437zm.86 2.271c-.383 2.297-.141 5.474.705 9.515l.489-.103c-.842-4.021-1.069-7.125-.701-9.33l-.494-.082zm.707 9.524c.656 2.626 1.077 4.401 1.263 5.332l.49-.098c-.189-.944-.612-2.73-1.268-5.355l-.485.121zm1.267 5.352c.181.633.104.98-.076 1.16l.353.354c.382-.382.398-.972.204-1.651l-.48.137zm-.076 1.16a.514.514 0 01-.172.127c-.025.009-.03.004-.032.003-.011-.006-.045-.03-.09-.106a1.484 1.484 0 01-.133-.337l-.48.137c.05.176.11.33.182.454a.742.742 0 00.297.299c.295.147.577-.018.781-.223l-.353-.353zm-.432-.328c-1.49-4.189-2.33-9.131-2.517-14.83l-.5.016c.189 5.737 1.035 10.733 2.546 14.981l.471-.167zM25.656 18.5c.048-.774-.057-1.411-.356-1.874-.308-.476-.797-.73-1.42-.781l-.041.498c.501.042.833.234 1.041.555.216.334.322.845.277 1.57l.499.032zm-1.75-2.652c-1.533-.287-3.156-.286-4.869 0l.082.492c1.662-.277 3.226-.276 4.694 0l.092-.492zm-4.828.246l-.177.176v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001l.001.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001l.001.001v.001h.001v.001h.001l.001.001v.001h.001a23883934.914 23883934.914 0 00.002.002v.001h.001v.001h.001v.001h.001v.001h.001v.001h.001l.001.001.001.001v.001h.001l.001.001.001.001v.001h.001l.001.001v.001h.001l.001.001v.001h.001l.001.001.001.001v.001h.001l.001.001.001.001v.001h.001l.001.001.001.001.001.001v.001h.001v.001h.001v.001h.001l.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.001.002h.001v.001h.001v.001h.002v.001l.001.001.001.001.001.002h.001l.001.001.001.001.001.001v.001h.001l.001.001.001.001.001.002h.002v.001l.001.001v.001h.001l.001.001.001.002h.002v.001l.001.002h.001l.001.001v.001h.002v.001l.001.002h.001l.001.001v.001H19v.002h.002v.002h.002v.002h.002v.002h.002v.002h.002v.002h.002v.002h.002v.002h.001l.001.002h.001v.001h.002v.002h.002v.002h.001l.002.002v.001h.002v.002h.001v.001h.002v.002h.001v.001h.002v.002h.001v.001h.002v.002h.001v.001h.002v.002h.001v.001h.002v.002h.001v.001h.002v.002h.001l.001.001v.001h.002v.002h.001l.001.001v.001h.002v.002h.001l.001.001v.001h.002v.002h.001l.001.001v.001h.002v.002h.001l.001.001.001.001v.001h.002v.002h.001l.001.001.001.001v.001h.002v.002h.001l.001.002h.001l.001.001v.001h.002v.002h.002v.002h.001l.001.001v.001l.002.001.002.002.001.001.001.001.001.001.001.001v.001l.002.001.002.002.001.002h.001l.001.001.001.001.001.001.001.001v.001l.002.001.002.002.002.002.001.002h.001l.001.001.001.001.001.001.001.001.001.001.001.001v.001l.002.001v.001h.002v.002h.002v.002h.002v.002h.002v.002h.002v.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.001.002h.001l.002.002.002.002.002.002.002.002.002.002.002.002v.001l.002.001v.001l.002.001.001.001.001.001.001.001.001.001.001.002h.001l.001.002h.002v.002h.002v.002l.002.001v.001l.002.001.001.001.001.001.001.001.001.002h.001l.002.002.354-.353-.002-.002-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001v-.002h-.002v-.002h-.002v-.002h-.002l-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001v-.002h-.002v-.002h-.002v-.002h-.002v-.002h-.002v-.002h-.002v-.002H19.5l-.001-.002h-.001l-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001h-.001l-.001-.002h-.001v-.002h-.002v-.002h-.002v-.002h-.002v-.002h-.002v-.002h-.002v-.002h-.002v-.001l-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001h-.001v-.002h-.002v-.002h-.002v-.002h-.002v-.001l-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.002-.002-.002-.001-.001-.001-.001-.001-.001-.001-.001h-.001v-.002h-.002v-.002h-.002v-.001l-.001-.001-.001-.001h-.001v-.002h-.002v-.002h-.001l-.001-.001-.001-.001h-.001v-.002h-.002v-.002h-.001l-.001-.001-.001-.001-.002-.002-.001-.001-.001-.001-.001-.001-.002-.002-.001-.001-.001-.001h-.001v-.002h-.002v-.001l-.001-.001-.001-.001-.002-.002-.001-.001H19.4v-.002h-.002v-.001l-.001-.001-.002-.002-.001-.001-.001-.001-.002-.002-.001-.001-.002-.002-.001-.001-.002-.002-.001-.001-.002-.002-.001-.001-.002-.002-.001-.001-.002-.002h-.001v-.002h-.001l-.001-.001-.002-.002h-.001v-.002h-.001l-.001-.001-.002-.001v-.001l-.002-.002-.002-.002h-.001v-.002h-.001-.001v-.002h-.001-.001v-.002h-.001-.001v-.002h-.001l-.002-.002-.002-.002-.002-.001v-.001l-.001-.001h-.001v-.002h-.001l-.002-.001v-.001l-.001-.001h-.001v-.002h-.001l-.001-.001h-.001V16h-.001l-.001-.001h-.001v-.002h-.001l-.001-.001-.002-.001v-.001l-.001-.001-.001-.001-.002-.001v-.002h-.001l-.001-.001-.001-.001-.001-.001h-.001v-.001l-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001h-.001v-.001l-.001-.001-.001-.001-.001-.001H19.3v-.001l-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001h-.001v-.001l-.001-.001h-.001v-.001l-.001-.001-.001-.001-.001-.001-.001-.001h-.001v-.001l-.001-.001-.001-.001-.001-.001-.001-.001h-.001v-.001h-.001v-.001h-.001v-.001h-.001v-.001l-.001-.001-.001-.001-.001-.001h-.001v-.001l-.001-.001h-.001v-.001l-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001h-.001v-.001h-.001v-.001h-.001v-.001l-.001-.001-.001-.001h-.001v-.001h-.001v-.001h-.001v-.001h-.001v-.001h-.001v-.001h-.001v-.001l-.177.177zm.149.493c.672.42 1.061 1.092 1.149 2.06l.498-.045c-.1-1.094-.554-1.921-1.382-2.439l-.265.424zm1.398 2.288c.155 0 .412.04.783.133l.121-.485c-.378-.095-.684-.148-.904-.148v.5zm.844.14H22.03v-.5h-.001-.001-.001-.004-.002-.001-.002-.001-.002-.001-.002-.001-.004-.001-.001-.001H21.991h-.001-.001-.005-.001-.001-.003-.005-.003-.003-.003-.003-.001-.003-.003-.001-.003-.001-.003-.001-.001-.003-.001-.001-.003-.001-.001-.003-.001-.001-.001-.003-.001-.001-.001-.005-.001-.001-.001-.005-.001-.001-.001-.001-.001-.005-.002-.001-.001-.001-.001-.001-.001-.001H21.881h-.002-.002-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.002-.002-.002-.01-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.006-.001-.001-.001-.001-.001-.006-.001-.001-.001-.001-.001-.006-.001-.001-.001-.006-.001-.001-.004-.001-.001-.001-.006-.001-.004-.001-.001-.001-.004-.001-.001-.004-.001-.001-.004-.001-.001-.004-.001-.004-.001-.001-.004-.001-.004-.001-.004-.001-.004-.001-.002-.001-.001-.004-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.004-.004-.004-.004-.004-.002-.001-.001-.002-.001-.001-.002-.001-.004-.002-.001-.001-.002-.001-.004-.002-.001-.004-.002-.001-.002-.001-.001-.002-.001-.002-.001-.004-.002-.001-.002-.001-.004-.002-.001-.002-.001-.002-.001-.002-.001-.004-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.002-.001-.002-.001-.002-.001-.002-.001-.002-.001-.002-.002-.001-.002-.001-.002-.001-.002-.002-.001-.002-.001-.002-.001-.002-.002-.001-.002-.001-.002-.002-.001-.002-.001-.002-.002-.001-.002-.001-.002-.002-.001-.002-.002-.001-.002-.001-.002-.002-.001-.002-.002-.001v.5zm.458-.022c1.076.493 1.759 1.197 2.084 2.107.327.917.303 2.078-.11 3.502l.48.14c.43-1.482.476-2.759.1-3.81-.378-1.06-1.172-1.855-2.346-2.394l-.208.455zm1.964 5.679c0 .15-.033.264-.087.353a.628.628 0 01-.267.232c-.268.134-.705.196-1.347.15l-.036.499c.67.047 1.217-.008 1.606-.202.2-.1.36-.238.471-.419.11-.18.16-.389.16-.613h-.5zm-1.76.738c-.23.038-.39-.003-.512-.094-.128-.096-.246-.273-.332-.572l-.48.137c.102.358.265.65.512.835.253.19.561.242.894.187l-.082-.493zm-.86-.71c-.06-.12-.067-.188-.064-.219.002-.016.006-.031.043-.054a.72.72 0 01.296-.078 3.28 3.28 0 01.603.01l.046-.499a3.751 3.751 0 00-.698-.008c-.194.02-.372.063-.512.15a.564.564 0 00-.274.42c-.02.17.032.34.112.502l.447-.223zm.873-.342c.48.053.891-.065 1.17-.407.266-.324.373-.805.373-1.389h-.5c0 .542-.103.881-.26 1.073-.142.174-.364.266-.727.226l-.056.497zm1.542-1.823c-.101-.91-.51-1.632-1.228-2.145l-.29.407c.594.425.935 1.016 1.021 1.793l.497-.055zm-1.235-2.15c-.183-.122-.435-.2-.73-.249a6.83 6.83 0 00-1.096-.073v.5c.414 0 .75.023 1.014.066.267.045.437.108.535.173l.277-.416zm-2.076-.065c.093 3.27-.331 5.547-1.224 6.885l.416.277c.983-1.474 1.402-3.885 1.308-7.177l-.5.015zm-1.233 6.9c-.62 1.096-.947 2.066-.947 2.901 0 .85.34 1.545 1.012 2.061l.305-.396c-.548-.42-.817-.969-.817-1.665 0-.712.282-1.593.882-2.654l-.435-.246zm.119 4.994c.358.153.706.203 1.009.07.305-.137.491-.429.595-.793l-.48-.138c-.084.292-.203.422-.319.473-.12.053-.31.057-.608-.071l-.197.46zm1.613-.774c.088-1.234.705-2.397 1.89-3.49l-.34-.368c-1.253 1.156-1.949 2.43-2.048 3.822l.498.036zm1.886-3.488c.41-.365.758-.587 1.043-.69.278-.099.478-.077.63.015l.258-.429c-.315-.19-.679-.191-1.056-.056-.372.132-.775.402-1.207.787l.332.373zm1.626-.713c.09.09.117.178.104.285-.015.122-.09.29-.263.507l.39.313c.201-.252.338-.506.37-.758a.816.816 0 00-.248-.7l-.353.353zm-.064.72c-.784.342-1.398.814-1.827 1.42-.43.606-.664 1.333-.713 2.169l.499.03c.044-.758.255-1.391.622-1.91.368-.519.903-.938 1.62-1.252l-.201-.457zm-2.537 3.559c-.18.987-.576 1.67-1.165 2.091l.29.407c.724-.517 1.172-1.333 1.367-2.409l-.492-.09zm-1.175 2.1c-.332.265-.85.255-1.674-.295l-.278.416c.863.576 1.658.753 2.264.269l-.313-.39zm-1.65-.277a4.415 4.415 0 01-1.332-1.998l-.474.158a4.914 4.914 0 001.48 2.22l.326-.38zm-1.34-2.018c-.516-1.205-.278-2.71.829-4.554l-.429-.257c-1.144 1.906-1.467 3.59-.86 5.008l.46-.197zm.822-4.544c.984-1.475 1.31-3.56 1.025-6.212l-.497.053c.279 2.598-.052 4.545-.944 5.882l.416.277zm.777-6.185l.223-.112v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001l-.001-.001v-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001l-.001-.001v-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.001h-.001v-.001-.002h-.001v-.001l-.001-.001v-.001h-.001v-.001-.001h-.001v-.002l-.001-.001v-.001h-.001v-.001-.001l-.001-.001v-.001h-.001v-.001-.001l-.001-.001V20.4l-.001-.001v-.001H19.4v-.001-.001l-.001-.001v-.001l-.001-.001v-.001h-.001v-.002h-.001v-.001-.001h-.001v-.001-.001l-.001-.001v-.002h-.001v-.002h-.001v-.002h-.001v-.002h-.001v-.002h-.001v-.002h-.001v-.002h-.001v-.001h-.001v-.001-.001h-.001v-.002h-.001v-.002l-.001-.001v-.002h-.001v-.002h-.001v-.001h-.001v-.002l-.001-.001v-.002h-.001v-.001h-.001v-.002l-.001-.001v-.002h-.001v-.001h-.001v-.002l-.001-.001v-.002h-.001v-.001l-.001-.001v-.002h-.001v-.001h-.001v-.002l-.001-.001v-.001h-.001v-.002l-.001-.001v-.001l-.001-.001v-.002h-.001v-.001l-.001-.001-.001-.002v-.001l-.001-.001v-.001h-.001v-.002l-.001-.002-.001-.001v-.001h-.001v-.002l-.001-.001v-.001l-.001-.001v-.001h-.001v-.002l-.001-.002-.001-.001V20.3l-.001-.001-.001-.002v-.002h-.001v-.001l-.001-.001v-.001l-.001-.001v-.001h-.001v-.002h-.001v-.002l-.001-.002-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001h-.001v-.002h-.001v-.002h-.001v-.002l-.001-.002-.001-.002-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.002-.001-.002-.001-.002h-.001v-.002h-.001v-.002h-.001v-.002l-.001-.001v-.001l-.001-.001v-.001l-.001-.001v-.001l-.001-.002-.001-.002h-.001v-.002h-.001v-.002l-.001-.001v-.001l-.001-.001-.447.223v.003h.001v.002h.001v.002h.001v.002l.001.001.001.001v.001l.001.001v.001l.001.002.001.002.001.002.001.002.001.002v.001l.001.001v.001l.001.001.001.001v.001l.001.001v.001l.001.001v.001l.001.001v.001l.001.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.001l.001.001v.001l.001.001v.001l.001.001v.001l.001.001v.002l.001.001v.001l.001.001.001.002.001.002.001.002.001.002.001.001v.001l.001.001v.002h.001v.002h.001v.002h.001v.002h.001v.001l.001.001v.002h.001v.002h.001v.002h.001v.001l.001.001v.002h.001v.002h.001v.001l.001.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.001l.001.001v.001l.001.002.001.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.001l.001.002v.001h.001v.002h.001v.001l.001.002v.001h.001v.002h.001v.001l.001.002v.001h.001v.002h.001v.002h.001v.001l.001.001v.001l.001.002.001.002v.001h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.001l.001.002.001.001v.001l.001.001v.002h.001v.002h.001v.001l.001.001v.001l.001.001v.002h.001v.001l.001.001v.002h.001v.001l.001.001v.002h.001v.001l.001.001v.001l.001.001v.002h.001v.002h.001v.001l.001.001v.001l.001.001v.001l.001.001v.001l.001.001v.001l.001.001v.002h.001v.002h.001v.001l.001.001v.002h.001v.001l.001.001v.002h.001v.001l.001.001v.001l.001.001v.001l.001.001v.001l.001.001v.002h.001v.001l.001.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001v.002h.001l.224-.111zm-.14-.532c-.396 0-.835.05-1.316.146l.098.49a6.268 6.268 0 011.217-.136v-.5zm-1.327.149c-.592.148-1.071.387-1.417.733-.35.35-.547.792-.6 1.312l.498.05c.042-.417.195-.748.456-1.008.263-.263.65-.469 1.184-.602l-.121-.485zm-2.018 2.07c0 .445.074.824.247 1.113.18.3.456.482.806.54l.082-.493a.619.619 0 01-.46-.304c-.107-.18-.175-.457-.175-.856h-.5zM14.102 4.406c-.762.952-1.254 1.828-1.454 2.627l.485.121c.176-.7.62-1.512 1.36-2.435l-.391-.313zm-1.452 2.62c-.103.36-.093.724.183.96.25.214.638.248 1.07.2l-.056-.497c-.411.046-.61-.014-.688-.082-.052-.044-.112-.15-.028-.445l-.48-.137zm1.235 1.161c4.78-.187 8.235-.186 10.375 0l.043-.499c-2.173-.189-5.655-.188-10.438 0l.02.5zm10.396 0c.267 0 .35.06.367.082.007.009.048.069-.036.279l.464.185c.103-.258.144-.55-.037-.776-.17-.212-.462-.27-.758-.27v.5zm.32.393a.434.434 0 01-.177.274c-.087.058-.22.1-.424.1v.5c.265 0 .506-.054.701-.183.2-.134.326-.331.385-.57l-.485-.121zm-.594.373c-3.29-.094-6.628 0-10.012.282l.041.499a89.162 89.162 0 019.957-.281l.014-.5zm-10.027.284c-.349.05-.647.155-.844.352-.212.212-.269.49-.21.788l.491-.098c-.034-.171.003-.268.072-.337.085-.084.255-.166.562-.21l-.07-.495zm-1.045 1.17c.46 1.38.69 2.852.69 4.421h.5c0-1.618-.238-3.145-.716-4.579l-.474.158zm.69 4.433c.093 1.953 0 4.612-.28 7.983l.498.041c.281-3.379.376-6.063.282-8.048l-.5.024zm-.28 7.978c-.468 4.583-1.307 7.966-2.502 10.172l.44.238c1.242-2.293 2.09-5.754 2.56-10.359l-.498-.05zm-2.52 10.212a.563.563 0 01-.115.219c-.027.027-.046.032-.07.032v.5c.354 0 .555-.279.66-.593l-.475-.158zm-.073.278c-.05-.026-.143-.123-.143-.48h-.5c0 .393.096.765.42.927l.223-.447zm-.143-.462c.092-1.287.695-4.218 1.821-8.818l-.485-.119c-1.124 4.588-1.74 7.563-1.835 8.901l.499.036zm1.825-8.832c.379-2.088.52-4.92.425-8.49l-.5.014c.094 3.555-.047 6.348-.418 8.386l.492.09zm.425-8.5c-.188-2.623-.517-4.451-1.01-5.438l-.448.223c.444.888.771 2.623.959 5.25l.499-.036zm-1.005-5.428c-.348-.781-.398-1.706-.127-2.791l-.485-.121c-.291 1.165-.248 2.208.154 3.115l.457-.203zm-.124-2.803c.179-.895.723-2.131 1.657-3.719l-.43-.253c-.942 1.6-1.522 2.895-1.718 3.874l.49.098zm1.65-3.707c.19-.285.337-.53.437-.73l-.447-.223c-.087.174-.221.399-.406.676l.416.277zm.437-.73c.088-.176.168-.29.235-.357.066-.066.1-.067.104-.067v-.5a.652.652 0 00-.458.214c-.12.12-.228.287-.328.487l.447.223zm.34-.424c-.06 0-.088-.028-.078-.02a.365.365 0 01.053.06c.057.076.131.201.223.384l.447-.223a3.124 3.124 0 00-.27-.46.826.826 0 00-.14-.151.379.379 0 00-.236-.09v.5zm.213.451a.96.96 0 01.172.702c-.037.244-.172.518-.435.825l.38.325c.3-.35.493-.708.55-1.074a1.46 1.46 0 00-.25-1.055l-.417.277z" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="19.5" x2="19.5" y1="0" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B92B27" />
          <stop offset="1" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="19.5" x2="19.5" y1="0" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B92B27" />
          <stop offset="1" stopColor="#1565C0" />
        </linearGradient>
        <filter id="filter0_d" width="27.175" height="40.366" x="6.109" y="1.922" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}