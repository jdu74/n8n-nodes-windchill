import { INodeProperties } from "n8n-workflow";

export const PtcBomTransformationDepartmentDataFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
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
					"GET /DepartmentDatas('{DepartmentDataId}')/PTC.BomTransformation.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
