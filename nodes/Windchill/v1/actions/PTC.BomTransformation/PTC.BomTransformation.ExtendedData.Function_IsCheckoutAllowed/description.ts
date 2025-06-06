import { INodeProperties } from "n8n-workflow";

export const PtcBomTransformationExtendedDataFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"GET /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
