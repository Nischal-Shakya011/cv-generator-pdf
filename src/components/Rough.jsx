// import { Grid, Typography, Box, Divider } from "@mui/material";
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// // import "../Component/Style.css";
// // import { useGetMarketSummary } from "../../../hooks/dashboard/useDashboard";

// const arrow = {
//     down: (
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M7 10L12 15L17 10"
//           stroke="#D32F2F"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     up: (
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M17 14L12 9L7 14"
//           stroke="#2E7D32"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   };

//   const Rough = () =>{
//     // const theme = useTheme();
//     // const {data:marketIndex, isloading} = useGetMarketSummary();



//     return(
//     <div
//       style={{
//         background: "red",
//         padding: "16px",
//         width: "100%",
//         marginBottom: "8px",
//         borderRadius: "10px",
//       }}
//     > 
//       <Grid container spacing={2} padding="0 1.5rem 1.5rem">
//         <Grid item xs={6}>
//           <Typography variant="h4" fontWeight="500">
//             NEPSE Market Summary
//           </Typography>
//           <Typography variant="body2" fontWeight="500">
//             Turnover: 45622222123255| Volume:
//             7896522 |
//           </Typography>
//           <Typography display="flex" variant="h4" fontWeight="500">
//             4526
//             <Typography variant="h4">
//               236.25 (
//               1.3)%
//             </Typography>
//           </Typography>
//           <Typography variant="h6" fontWeight="500">As on 2024/02/03</Typography>
//         </Grid>

//      <Grid item xs={6} sx={{marginBottom:"24px", backgroundColor:"blue"}}>
//         <Box
//         sx={{
//         display: 'flex',
//         alignItems: 'center',
//         border: '1px solid',
//         borderColor: 'divider',
//         borderRadius: 2,
//         bgcolor: 'background.paper',
//         color: 'text.secondary',
//         '& svg': {
//           m: 1,
//         },
//       }}
//     >
//         <Grid container display="flex" wrap="nowrap">
//         <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', padding:"16px" }}>
//         <svg width="20" height="18" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g clip-path="url(#clip0_2472_1100)">
//             <path d="M7.46696 0L0.5 3.31618L7.49658 6.4373L14.5 3.32619L7.46696 0ZM14.5 7.14255L11.376 5.66577L7.64697 7.32262C7.54671 7.36763 7.43848 7.36388 7.34505 7.32262L3.60693 5.65452L0.5 7.1338L7.49658 10.2537L14.5 7.14255ZM11.4535 9.44837L7.64697 11.139C7.54671 11.184 7.43848 11.1802 7.34505 11.139L3.52946 9.43712L0.5 10.8801L7.49658 14.0013L14.5 10.8901L11.4535 9.44837Z" fill="#62707C"/>
//             </g>
//             <defs>
//             <clipPath id="clip0_2472_1100">
//             <rect width="14" height="14" fill="white" transform="translate(0.5)"/>
//             </clipPath>
//             </defs>
//             </svg>

//             <Divider orientation="horizontal" variant="middle" sx={{color:"black", width:"full", alignSelf: 'stretch', mx: 1 }}/> 
           
//            <Typography> 
//             All
//            </Typography>
//         </Grid>
//     <Divider orientation="vertical" variant="middle" flexItem />
//     <Grid item sx={{ display: 'flex', flexDirection:"column", alignItems: 'center', width: '25%', padding:"16px" }}>
//     <div style={{display:"flex", alignItems:"center", gap:"2"}}>
//     <svg width="20" height="18" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g clip-path="url(#clip0_2472_1107)">
//     <path d="M0.748339 7.74673C0.423632 8.06167 0.416308 8.58047 0.73247 8.90518C1.04741 9.22989 1.56621 9.23721 1.89092 8.92105L5.26616 5.62759L8.08843 8.35098C8.41436 8.6647 8.93315 8.65493 9.24687 8.32901L13.8575 3.66348V6.01577C13.8575 6.46988 14.2249 6.83731 14.679 6.83731C15.1331 6.83731 15.5005 6.46988 15.5005 6.01577V1.66641H15.4981C15.4981 1.45401 15.4163 1.24282 15.254 1.08291C15.0818 0.913234 14.8523 0.835109 14.6277 0.849758H10.5591C10.105 0.849758 9.7376 1.21719 9.7376 1.67129C9.7376 2.12539 10.105 2.49282 10.5591 2.49282H12.7112L8.64263 6.60904L5.83135 3.89541C5.51396 3.59024 5.00981 3.58902 4.69243 3.89907L0.748339 7.74673Z" fill="#66BB6A"/>
//     </g>
//     <defs>
//     <clipPath id="clip0_2472_1107">
//     <rect width="15" height="8.30566" fill="white" transform="translate(0.5 0.847168)"/>
//     </clipPath>
//     </defs>
//     </svg>{" "}
//     <Typography>208</Typography>
//     </div>
//             <Divider orientation="horizontal" variant="middle" sx={{color:"black", width:"full", alignSelf: 'stretch', mx: 1 }}/> 
//            <Typography> 
//             Advanced
//            </Typography>        
//            </Grid>      
//         <Divider orientation="vertical" variant="middle" flexItem  />
//         <Grid item sx={{ display: 'flex', flexDirection:"column", alignItems: 'center', width: '25%', padding:"16px" }}>
//     <div style={{display:"flex",alignItems:"center", gap:"2"}}>
//     <svg width="20" height="18" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//      <g clip-path="url(#clip0_2472_1115)">
//      <path d="M0.747873 2.252C0.423166 1.9369 0.417063 1.41783 0.732004 1.09295C1.04695 0.768075 1.56574 0.760747 1.89045 1.07707L5.2657 4.37225L8.08796 1.64744C8.41389 1.33356 8.93269 1.34333 9.24641 1.66942L13.857 6.33739V3.98386C13.857 3.52953 14.2244 3.1619 14.6785 3.1619C15.1326 3.1619 15.5001 3.52953 15.5001 3.98386V8.3355H15.4976C15.4976 8.54801 15.4158 8.75931 15.2535 8.9193C15.0814 9.08907 14.8519 9.16723 14.6273 9.15258H10.5587C10.1046 9.15258 9.73713 8.78495 9.73713 8.33061C9.73713 7.87628 10.1046 7.50865 10.5587 7.50865H12.7108L8.64216 3.39029L5.83088 6.10533C5.5135 6.41067 5.00935 6.41189 4.69197 6.10167L0.747873 2.252Z" fill="#F44336"/>
//      </g>
//      <defs>
//      <clipPath id="clip0_2472_1115">
//      <rect width="15" height="8.31" fill="white" transform="translate(0.5 0.844971)"/>
//      </clipPath>
//      </defs>
//      </svg>{" "}
//     <Typography>208</Typography>
//     </div>
//             <Divider orientation="horizontal" variant="middle" sx={{color:"black", width:"full", alignSelf: 'stretch', mx: 1 }}/> 
//            <Typography> 
//             Declined
//            </Typography>        
//            </Grid>
//         <Divider orientation="vertical" variant="middle" flexItem />
//         <Grid item sx={{ display: 'flex', flexDirection:"column", alignItems: 'center', width: '25%', padding:"16px" }}>
//     <div style={{display:"flex", alignItems:"center", gap:"2"}}>
//     <svg width="20" height="18" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M6.47329 3.66913C6.41132 3.61446 6.33758 3.57106 6.25634 3.54144C6.1751 3.51183 6.08797 3.49658 5.99996 3.49658C5.91195 3.49658 5.82481 3.51183 5.74357 3.54144C5.66234 3.57106 5.5886 3.61446 5.52663 3.66913L2.19329 6.5858C2.13081 6.64003 2.08121 6.70454 2.04737 6.77563C2.01352 6.84671 1.99609 6.92296 1.99609 6.99996C1.99609 7.07697 2.01352 7.15322 2.04737 7.2243C2.08121 7.29539 2.13081 7.3599 2.19329 7.41413L5.52663 10.3308C5.5886 10.3855 5.66234 10.4289 5.74357 10.4585C5.82481 10.4881 5.91195 10.5033 5.99996 10.5033C6.08797 10.5033 6.1751 10.4881 6.25634 10.4585C6.33758 10.4289 6.41132 10.3855 6.47329 10.3308C6.53578 10.2766 6.58537 10.2121 6.61922 10.141C6.65307 10.0699 6.67049 9.99364 6.67049 9.91663C6.67049 9.83962 6.65307 9.76338 6.61922 9.6923C6.58537 9.62121 6.53578 9.55669 6.47329 9.50247L3.60663 6.99996L6.47329 4.49746C6.53578 4.44324 6.58537 4.37872 6.61922 4.30763C6.65307 4.23655 6.67049 4.1603 6.67049 4.0833C6.67049 4.00629 6.65307 3.93005 6.61922 3.85896C6.58537 3.78788 6.53578 3.72336 6.47329 3.66913ZM13.8066 6.5858L10.4733 3.66913C10.4111 3.61474 10.3373 3.5716 10.2561 3.54216C10.1749 3.51273 10.0879 3.49758 9.99996 3.49758C9.82242 3.49758 9.65216 3.55929 9.52663 3.66913C9.46447 3.72352 9.41516 3.78809 9.38152 3.85915C9.34788 3.93022 9.33056 4.00638 9.33056 4.0833C9.33056 4.23864 9.40109 4.38762 9.52663 4.49746L12.3933 6.99996L9.52663 9.50247C9.46414 9.55669 9.41454 9.62121 9.3807 9.6923C9.34685 9.76338 9.32943 9.83962 9.32943 9.91663C9.32943 9.99364 9.34685 10.0699 9.3807 10.141C9.41454 10.2121 9.46414 10.2766 9.52663 10.3308C9.5886 10.3855 9.66233 10.4289 9.74357 10.4585C9.82481 10.4881 9.91195 10.5033 9.99996 10.5033C10.088 10.5033 10.1751 10.4881 10.2563 10.4585C10.3376 10.4289 10.4113 10.3855 10.4733 10.3308L13.8066 7.41413C13.8691 7.3599 13.9187 7.29539 13.9526 7.2243C13.9864 7.15322 14.0038 7.07697 14.0038 6.99996C14.0038 6.92296 13.9864 6.84671 13.9526 6.77563C13.9187 6.70454 13.8691 6.64003 13.8066 6.5858Z" fill="#1976D2"/>
//     </svg>{" "}
//     <Typography>208</Typography>
//     </div>
//             <Divider orientation="horizontal" variant="middle" sx={{borderColor:"black", borderWidth:"1", width:"full", alignSelf: 'stretch', mx: 1 }}/> 
//            <Typography> 
//             Unchanged
//            </Typography>        
//            </Grid> 
//         </Grid>
//         </Box>
//         </Grid>

//          </Grid>
//          </div> 
//     )
//   }
//   export default Rough;