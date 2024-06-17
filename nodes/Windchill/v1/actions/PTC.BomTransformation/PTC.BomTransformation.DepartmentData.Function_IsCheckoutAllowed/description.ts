import { INodeProperties } from "n8n-workflow";

export const PtcBomTransformationDepartmentDataFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
	{
		displayName: 'DepartmentDataId',
		name: 'DepartmentDataId-string(path)',
		description: 'Department Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"GET /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
