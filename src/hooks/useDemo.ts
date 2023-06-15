import { useEffect, useState } from 'react';
import { handleRequest } from '@/helpers/handleAsync';
import { Product } from '@/types/product';
import productService from '@/services/productService';
import {
  getExampleState,
  getUIState,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { exampleSliceActions } from '@/store/slices/exampleSlice';

export default function useDemo() {
  const [data, setData] = useState<Product | null>(null);

  const dispatch = useAppDispatch();
  const { keyName } = useAppSelector(getExampleState);
  const { isLoading } = useAppSelector(getUIState);
  console.log('🚀 ~ file: useDemo.ts:12 ~ useDemo ~ data2:', keyName);
  console.log('🚀 ~ file: useDemo.ts:14 ~ useDemo ~ data3:', isLoading);

  function RunDispatch() {
    dispatch(exampleSliceActions.asyncExample(null));
  }

  // useEffect(() => {
  //   RunDispatch();
  // }, []);

  // example api call
  // async function Run() {
  //   const [res, error] = await handleRequest(productService.getProduct({}));
  //   if (error) {
  //     // do something
  //     return;
  //   }
  //   setData(res!);
  // }
  // console.log('data_', data);

  // useEffect(() => {
  //   // Run();
  //   // load Object env
  //   console.log('Object env__', JSON.parse(__OBJECT_ENV__));
  //   // load string env
  //   console.log('string env__', __BASE_URI__);
  //   // load all env
  //   console.log('all env__', import.meta.env.REACT_APP_BASE_URI);
  // }, []);
}
