import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import InfoIcon from '@mui/icons-material/Info';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import HelpIcon from '@mui/icons-material/Help';
import { useValue } from '../../../../context/ContextProvider';
import {
  getMoreDetails,
  getExpand,
  getHistoryExpand,
} from '../../../../actions/option';
import Divider from '@mui/material/Divider';

const TextOption = () => {
  const {
    state: { currentUser, product },
    dispatch,
  } = useValue();
  const updateXarrow = useXarrow();

  const theme = useTheme();

  const handleExpand = (index) => {
    const optionExpand = {
      objectId: product._id,
      questionType: 'details',
      currentAsk: product.resultAI[index],
      optionIndex: index,
    };
    getExpand(optionExpand, currentUser, dispatch, 0);
  };
  const handleHistoryExpand = (indexGroup, index) => {
    console.log(indexGroup);
    console.log(index);
    const currentAskArray = product.history[indexGroup];
    const currentAsk = currentAskArray.textOptions[index];
    const optionMore = {
      objectId: product._id,
      questionType: 'details',
      currentAsk: currentAsk,
      indexGroup: indexGroup,
      optionIndex: index,
    };
    getHistoryExpand(optionMore, currentUser, dispatch, 0);
  };
  const handleInfo = (index) => {
    const optionMore = {
      objectId: product._id,
      questionType: 'details',
      currentAsk: product.resultAI[index],
    };
    getMoreDetails(optionMore, currentUser, dispatch, 0);
  };
  const handleInfoHistory = (indexGroup, index) => {
    const currentAskArray = product.history[indexGroup];
    const currentAsk = currentAskArray.textOptions[index];
    const optionMore = {
      objectId: product._id,
      questionType: 'details',
      currentAsk: currentAsk,
    };
    getMoreDetails(optionMore, currentUser, dispatch, 0);
  };

  const handleQuestion = (key) => {
    console.log('clicked');
  };
  return (
    <Xwrapper>
      <Box>
        <Box marginBottom={2}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'text.secondary'}
            align={'center'}
          >
            Different Options
          </Typography>
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            id="title"
          >
            {product?.optionTitle}
          </Typography>
        </Box>
        {product && product?.history && (
          <>
            {product?.history.map((historyItem, indexGroup) => (
              <>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-around"
                  sx={{ paddingBottom: 2, paddingTop: 2 }}
                  key={indexGroup}
                >
                  <>
                    {historyItem.textOptions.map((item, index) => (
                      // console.log(historyItem.clickedColumn === index),
                      <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box
                          id={`box${indexGroup}${index}`}
                          component={Card}
                          boxShadow={2}
                          bgcolor={
                            historyItem.clickedColumn === String(index)
                              ? 'primary.main'
                              : 'none'
                          }
                          sx={{
                            textDecoration: 'none',
                            // ...(historyItem.clickedColumn ===
                            //   String(index) && {
                            //   backgroundColor: '#eb1801',
                            // }),
                            transition: 'all .2s ease-in-out',
                            '&:hover': {
                              transform: `translateY(-${theme.spacing(1 / 2)})`,
                            },
                          }}
                        >
                          <CardContent>
                            {/* <Box
                      component={Avatar}
                      src={item.avatar}
                      height={80}
                      width={80}
                    /> */}
                            <Box>
                              <ListItemText
                                disableTypography
                                primary={
                                  <Typography
                                    style={{
                                      color:
                                        index !==
                                        parseInt(historyItem.clickedColumn, 10)
                                          ? 'none'
                                          : theme.palette.common.white,
                                    }}
                                  >
                                    {item}{' '}
                                  </Typography>
                                }
                              />
                              {/* <ListItemText primary={item} />
                                <Typography
                        variant={'subtitle2'}
                        color={'text.secondary'}
                      >
                        {item}
                      </Typography> */}
                              <Box marginTop={2}>
                                <IconButton
                                  size={'small'}
                                  sx={{ color: '#f8b933' }}
                                  // color={'primary'}
                                  onClick={() =>
                                    handleHistoryExpand(indexGroup, index)
                                  }
                                >
                                  <Tooltip
                                    title="Find Next options"
                                    placement="bottom"
                                  >
                                    <ExpandCircleDownIcon />
                                  </Tooltip>
                                </IconButton>
                                <IconButton
                                  size={'small'}
                                  sx={{ color: '#f8b933' }}
                                  onClick={() =>
                                    handleInfoHistory(indexGroup, index)
                                  }
                                >
                                  <Tooltip
                                    title="Get more info"
                                    placement="bottom"
                                  >
                                    <InfoIcon />
                                  </Tooltip>
                                </IconButton>
                              </Box>
                            </Box>
                          </CardContent>
                        </Box>
                      </Grid>
                    ))}
                  </>
                </Grid>
                <Divider />
              </>
            ))}
          </>
        )}
        <Grid
          container
          spacing={2}
          rowSpacing={6}
          alignItems="center"
          justifyContent="space-around"
          sx={{ paddingTop: 2 }}
        >
          {product && product?.resultAI && (
            <>
              {product?.resultAI.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    id={`boxnow${index}`}
                    component={Card}
                    boxShadow={2}
                    sx={{
                      textDecoration: 'none',
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        transform: `translateY(-${theme.spacing(1 / 2)})`,
                      },
                    }}
                  >
                    <CardContent>
                      {/* <Box
                      component={Avatar}
                      src={item.avatar}
                      height={80}
                      width={80}
                    /> */}
                      <Box>
                        <ListItemText primary={item} />
                        {/* <Typography
                        variant={'subtitle2'}
                        color={'text.secondary'}
                      >
                        {item}
                      </Typography> */}
                        <Box marginTop={2}>
                          <IconButton
                            size={'small'}
                            sx={{ color: '#f8b933' }}
                            onClick={() => handleExpand(index)}
                          >
                            <Tooltip
                              title="Find Next options"
                              placement="bottom"
                            >
                              <ExpandCircleDownIcon />
                            </Tooltip>
                          </IconButton>
                          <IconButton
                            size={'small'}
                            sx={{ color: '#f8b933' }}
                            onClick={() => handleInfo(index)}
                          >
                            <Tooltip title="Get more info" placement="bottom">
                              <InfoIcon />
                            </Tooltip>
                          </IconButton>
                          {/* <IconButton
                          size={'small'}
                          color={'primary'}
                          onClick={() => handleQuestion(index)}
                        >
                          <Tooltip
                            title="Ask custom question"
                            placement="bottom"
                          >
                            <HelpIcon />
                          </Tooltip>
                        </IconButton> */}
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </Grid>
              ))}
            </>
          )}
        </Grid>
        ``
        {product && product?.history.length ? (
          <>
            <Xarrow
              start="title"
              strokeWidth={2}
              path="grid"
              startAnchor="bottom"
              endAnchor="top" //can be react ref
              end={`box0${product?.history[0].clickedColumn}`} //or an id
            />
            {product?.history.map((historyItem, indexGroup) =>
              indexGroup < product.history.length - 1 ? (
                <Xarrow
                  start={`box${indexGroup}${product?.history[indexGroup].clickedColumn}`}
                  strokeWidth={2}
                  path="grid"
                  startAnchor="bottom"
                  endAnchor="top" //can be react ref
                  end={`box${indexGroup + 1}${
                    product?.history[indexGroup + 1].clickedColumn
                  }`}
                />
              ) : (
                <></>
              ),
            )}
            <Xarrow
              start={`box${product?.history.length - 1}${
                product?.history[product?.history.length - 1].clickedColumn
              }`}
              strokeWidth={2}
              path="grid"
              startAnchor="bottom"
              endAnchor="top" //can be react ref
              end="boxnow0"
            />
            <Xarrow
              start={`box${product?.history.length - 1}${
                product?.history[product?.history.length - 1].clickedColumn
              }`}
              strokeWidth={2}
              path="grid"
              startAnchor="bottom"
              endAnchor="top" //can be react ref
              end="boxnow1"
            />
            <Xarrow
              start={`box${product?.history.length - 1}${
                product?.history[product?.history.length - 1].clickedColumn
              }`}
              strokeWidth={2}
              path="grid"
              startAnchor="bottom"
              endAnchor="top" //can be react ref
              end="boxnow2"
            />
          </>
        ) : (
          <>
            {product?.resultAI ? (
              <>
                <Xarrow
                  start="title"
                  strokeWidth={2}
                  path="grid"
                  startAnchor="bottom"
                  endAnchor="top" //can be react ref
                  end="boxnow0" //or an id
                />
                <Xarrow
                  start="title"
                  strokeWidth={2}
                  path="grid"
                  startAnchor="bottom"
                  endAnchor="top" //can be react ref
                  end="boxnow1" //or an id
                />
                <Xarrow
                  start="title"
                  strokeWidth={2}
                  path="grid"
                  startAnchor="bottom"
                  endAnchor="top" //can be react ref
                  end="boxnow2" //or an id
                />
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </Box>
    </Xwrapper>
  );
};

export default TextOption;
