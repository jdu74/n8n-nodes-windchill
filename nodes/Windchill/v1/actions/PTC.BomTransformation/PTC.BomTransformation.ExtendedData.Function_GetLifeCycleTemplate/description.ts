import { INodeProperties } from "n8n-workflow";

export const PtcBomTransformationExtendedDataFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
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
					"GET /ExtendedDatas('{ExtendedDataId}')/PTC.BomTransformation.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
